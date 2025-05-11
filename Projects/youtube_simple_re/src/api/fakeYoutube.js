import axios from 'axios';

export default class FakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get('/videos/videos.json')
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })))
      .catch((e) => console.log(`error: ${e}`));
  }

  async #mostPopular() {
    return axios
      .get('/videos/popular.json')
      .then((res) => res.data.items)
      .catch((e) => console.log(`error: ${e}`));
  }
}
