import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://bradoo-test-api.herokuapp.com',
});
