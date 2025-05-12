export default class YoutubeService {
  constructor(client) {
    this.client = client;
  }

  async search(keyword) {
    return keyword
      ? this.client.searchVideoByKeyword(keyword)
      : this.client.searchPopularVideo();
  }
}
