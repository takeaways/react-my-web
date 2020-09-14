import axios from 'axios'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=def604eb5a3e1c5dc74b8390a4fd10a3&language=en-US&page=1`

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: 'def604eb5a3e1c5dc74b8390a4fd10a3',
    language: 'en-US',
  },
})

export const tvService = {
  tvRated: () => api.get('tv/top_rated'),
  popuplar: () => api.get('tv/popuplar'),
  airingToday: () => api.get('tv/airing_today'),
  tvDetail: (id: any) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'video',
      },
    }),
  search: (term: string) =>
    api.get(`search/tv`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
}
export const movieService = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcomming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id: any) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'video',
      },
    }),
  search: (term: string) =>
    api.get(`search/movie`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
}

export default api
