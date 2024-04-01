export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    const response = await this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        q: keyword,
      },
    });

    const items = response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));

    return items;
  }

  async #mostPopular() {
    const response = await this.apiClient.videos({
      params: {
        part: "snippet",
        maxResults: 25,
        chart: "mostPopular",
      },
    });
    return response.data.items;
  }
}
