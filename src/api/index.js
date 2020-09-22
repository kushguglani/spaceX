import axios from 'axios';

export const api = {
  spaceX: {
    all: () => {
      return axios.get({ url: 'http://localhost:3000/api/spaceXdata' });
    },
    filter: filterData => {
      return axios.get(
        `http://localhost:3000/api/filter?data=${JSON.stringify(filterData)}`
      );
    }
  }
};
//check in axios how to pass requst object
// axios set base
