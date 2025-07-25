import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000', // adjust if your backend uses a different port
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
