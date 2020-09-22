import axios from 'axios';

export const api = {
  spaceX: {
    all: () => {
      return axios.get(`${process.env.PUBLIC_URL}/api/spaceXdata`);
    },
    filter: (filterData) => {
      return axios.get(
        `${process.env.PUBLIC_URL}/api/filter?data=${JSON.stringify(
          filterData
        )}`
      );
    },
  },
};
//check in axios how to pass requst object
// axios set base
