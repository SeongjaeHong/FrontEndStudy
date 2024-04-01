import axios from "axios";

export default class fakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    const response = await axios.get("/data/search_list.json");
    const items = response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  }

  async #mostPopular() {
    const response = await axios.get("/data/popular_list.json");
    return response.data.items;
  }
}
