// import fetch from 'isomorphic-unfetch';
import axios from 'axios';

export function httpClient(baseURL) {
  return {
    get: (path, options) => {
      return axios(baseURL + path, options).then(res => {
        if (!res.status === 200) {
          throw new Error(res.statusText);
        }
        return res.data;
      });
    }
  };
}
