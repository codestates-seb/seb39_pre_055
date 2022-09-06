import axios, {
  AxiosRequestTransformer,
  AxiosResponseTransformer,
} from 'axios';

import { tagFormat } from './tagFormat';

export const STACK_EXCHANGE_URL = 'https://api.stackexchange.com/2.3';

export const authHeader = (thunkAPI: any) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export const axiosInstance = axios.create({
  baseURL: 'http://soyoungp.shop', // 서버 url
  timeout: 5000,
  transformRequest: [
    (data) => {
      if (data && 'questionTags' in data) {
        data.questionTags = tagFormat(data.questionTags);
      }

      return data;
    },
    ...(axios.defaults.transformRequest as AxiosRequestTransformer[]),
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosResponseTransformer[]),
    (res) => {
      let { data } = res || {};

      if (Array.isArray(data)) {
        data = data.map((el) => {
          if ('questionTags' in el) {
            el.questionTags = tagFormat(el.questionTags);
          }

          return el;
        });
      }
      if (data && 'questionTags' in data) {
        data.questionTags = tagFormat(data.questionTags);
      }

      return res;
    },
  ],
});
