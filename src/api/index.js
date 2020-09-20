import { httpClient } from './httpClient';
import { spaceXdataApi } from './spaceXdataApi';

export function apiFactory(http) {
  return {
    spaceX: spaceXdataApi(http)
  };
}

const http = httpClient('http://localhost:3000');
export const api = apiFactory(http);
