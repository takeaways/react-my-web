export default class Youtube {
  private getRequestOptions: RequestInit
  constructor(private key: string) {
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
  }

  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(response => response.json())
      .then(result => result.items)
  }

  search(query: string) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(response => response.json())
      .then(result =>
        result.items.map((item: any) => ({ ...item, id: item.id.videoId })),
      )
      .then(result => result)
  }
}
