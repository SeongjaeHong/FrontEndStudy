import axios from 'axios';
import YoutubeClient from './YoutubeClient';

export default class FakeYoutube extends YoutubeClient {
  constructor() {
    super();
    this.mockKeywordFile = '/videos/videos.json';
    this.smockPopularFile = '/videos/popular.json';
  }

  async searchVideoByKeyword(keyword) {
    return axios
      .get(this.mockKeywordFile)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })))
      .catch((e) => console.log(`error: ${e}`));
  }

  async searchPopularVideo() {
    return axios
      .get(this.smockPopularFile)
      .then((res) => res.data.items)
      .catch((e) => console.log(`error: ${e}`));
  }
}
