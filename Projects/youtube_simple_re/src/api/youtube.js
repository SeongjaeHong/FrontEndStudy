import axios from 'axios';

export async function search(keyword) {
  const keyword = keyword ? 'videos.json' : 'popular.json';
  return axios
    .get('/videos/' + keyword)
    .then((res) => res.data.items)
    .catch((e) => console.log(`error: ${e}`));
}
