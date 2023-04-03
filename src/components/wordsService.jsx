import axios from 'axios';

const wordsUrl = 'http://localhost:3005/api/words';

const getAll = () => {
  const request = axios.get(wordsUrl);
  return request.then(response => response.data);
}

const update = (editWord) => {
  const request = axios.put(wordsUrl, editWord);
  return request.then(response => response.data);
}

const add = (editWord) => {
  const request = axios.post(wordsUrl, editWord);
  return request.then(response => response.data);
}

const del = (id) => {
  const request = axios.delete(`${wordsUrl}/${id}`);
  return request.then(response => response.data);
}

export { getAll, update, add, del }