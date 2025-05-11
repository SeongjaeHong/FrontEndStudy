import axios from 'axios';

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    console.log('Search ' + keyword);
    return this.httpClient
      .get('/search', {
        params: {
          part: 'snippet',
          q: keyword,
          maxResults: 25,
        },
      })
      .then((res) => res.data.items)
      .catch((e) => console.log(`error: ${e}`));
  }

  async #mostPopular() {
    console.log('Search popular lists');
    return this.httpClient
      .get('/videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then((res) => res.data.items)
      .catch((e) => console.log(`error: ${e}`));
  }
}
