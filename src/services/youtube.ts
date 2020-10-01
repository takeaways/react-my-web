import axios, { AxiosInstance } from 'axios'
export default class Youtube {
  private youtube: AxiosInstance
  constructor(private key: string) {
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key },
    })
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    })
    return response.data.items
  }

  async search(query: string) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        q: query,
      },
    })

    return response.data.items.map((item: any) => ({
      ...item,
      id: item.id.videoId,
    }))
  }
}
