import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:8010/',
});

export default api;
