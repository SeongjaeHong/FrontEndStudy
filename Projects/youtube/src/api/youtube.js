import axios from "axios";

export async function searchVideos(keyword) {
  const response = await axios.get(
    `/data/${keyword ? "search_list" : "popular_list"}.json`
  );
  return response.data.items;
}
