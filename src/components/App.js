import React, { useState, useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Head from './Head';
import { useServerData } from './../state/serverDataContext';
import { api } from './../api';

const LoadableHeader = Loadable({
  loader: () => import(/* webpackChunkName: 'header' */ './header/Header'),
  loading: () => <div>Loading...</div>
});

const LoadableFilter = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './filter/FilterContainer'),
  loading: () => <div>Loading...</div>
});

const LoadableSpaceBar = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './spaceBar/SpaceBarContainer'),
  loading: () => <div>Loading...</div>
});


const LoadableFooter = Loadable({
  loader: () => import(/* webpackChunkName: 'header' */ './footer/Footer'),
  loading: () => <div>Loading...</div>
});

const App = () => {
  const serverSpaceX = useServerData(data => data.spaceX || []);
  const [spacex, setSpaceX] = useState(serverSpaceX)
  const [filter, setFilter] = useState({ selectedYear: '', successfullLaunch: '', successfullLanding: '' })
  useEffect(() => {
    api.spaceX.filter(filter).then(res => {
      setSpaceX(res)
    });

  }, [filter])
  return (
    <div className="app">
      <Head />
      <LoadableHeader />
      <div className="container">
        {/* <div className="row"> */}
        <div className="col-3">
          <LoadableFilter
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div className="col-9">
          <LoadableSpaceBar spacex={spacex} />
          {/* <Switch>
            <Route exact path="/" component={() => <LoadableSpaceBar spacex={spacex} />} />
            <Route path="/filter" component={() => <LoadableSpaceBar spacex={spacex} />} /> */}
            {/* handle invalid route  */}
          {/* </Switch> */}
          {/* <LoadableHome /> */}
        </div>
        {/* </div> */}
      </div>
      <LoadableFooter />
    </div>
  )
};
export default App;
