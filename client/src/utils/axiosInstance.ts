import axios from 'axios';

export const STACK_EXCHANGE_URL = 'https://api.stackexchange.com/2.3';

export const axiosInstance = axios.create({
  baseURL: 'http://13.209.17.182:8080', // 서버 url
});
