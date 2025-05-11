export default class YoutubeService {
  constructor(client) {
    this.client = client;
  }

  async search(keyword) {
    return keyword
      ? this.client.searchByKeyword(keyword)
      : this.client.mostPopular();
  }
}
