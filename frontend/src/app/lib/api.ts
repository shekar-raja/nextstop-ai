import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // backend server url
});

export default api;