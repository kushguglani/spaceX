export function spaceXdataApi(http) {
  return {
    all: () => {
      return http.get('/api/spaceXdata');
    },
    filter: (filterData)=>{
      return http.get(`/api/filter?data=${JSON.stringify(filterData)}`);
    }
  };
}
