import { Router } from 'express';
import axios from 'axios'

export const spaceXRoutes = () => {
  const spaceXRoutes = new Router();

  spaceXRoutes.get('/api/spaceXdata', (_req, res) => {
    axios.get('https://api.spaceXdata.com/v3/launches?limit=100').then(response => {
      res.json(response.data);
    })
  });
  spaceXRoutes.get('/api/filter', (_req, res) => {
    let paramsData = JSON.parse(_req.query.data);
    let launch_success = paramsData.successfullLaunch;
    let land_success = paramsData.successfullLanding;
    let launch_year = paramsData.selectedYear;    
    axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`).then(response => {
      res.json(response.data);
    })
  });
  // add more routes here
  return spaceXRoutes;
};

// https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
// http://localhost:3000/api/filter?data={%22selectedYear%22:%222017%22,%22successfullLaunch%22:%22%22,%22successfullLanding%22:%22%22