import axios from "axios";

export default class fakeYoutubeClient {
  async search() {
    return axios.get("/data/search_list.json");
  }
  async videos() {
    return axios.get("/data/popular_list.json");
  }
}
