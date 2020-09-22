import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Head from './Head';
import { useServerData } from './../state/serverDataContext';
import { api } from './../api';

const LoadableSpinner = Loadable({
  loader: () => import(/* webpackChunkName: 'header' */ './spinner/Spinner'),
  loading: () => <div>Loading...</div>,
});

const LoadableHeader = Loadable({
  loader: () => import(/* webpackChunkName: 'header' */ './header/Header'),
  loading: () => <div>Loading...</div>,
});

const LoadableFilter = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'home' */ './filter/FilterContainer'),
  loading: () => <div>Loading...</div>,
});

const LoadableSpaceBar = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'home' */ './spaceBar/SpaceBarContainer'),
  loading: () => <div>Loading...</div>,
});

const LoadableFooter = Loadable({
  loader: () => import(/* webpackChunkName: 'header' */ './footer/Footer'),
  loading: () => <div>Loading...</div>,
});

const App = () => {
  const serverSpaceX = useServerData((data) => data.spaceX || []);
  const [spacex, setSpaceX] = useState(serverSpaceX);
  const [displaySpinner, setDisplaySpinner] = useState(true);
  const [filter, setFilter] = useState({
    selectedYear: '',
    successfullLaunch: '',
    successfullLanding: '',
  });
  useEffect(() => {
    api.spaceX.filter(filter).then((res) => {
      console.log(res.data);
      setDisplaySpinner(false);
      setSpaceX(res.data);
    });
  }, [filter]);
  return (
    <div className="app">
      <LoadableSpinner display={displaySpinner} />
      <Head />
      <LoadableHeader />
      <div className="container">
        <div className="col-3">
          <LoadableFilter
            filter={filter}
            setFilter={setFilter}
            setDisplaySpinner={setDisplaySpinner}
          />
        </div>
        <div className="col-9">
          {/* <LoadableSpaceBar spacex={spacex} /> */}
          <Switch>
            <Route
              exact
              path="/"
              component={() => <LoadableSpaceBar spacex={spacex} />}
            />
            <Route
              path="/filter"
              component={() => <LoadableSpaceBar spacex={spacex} />}
            />
            {/* handle invalid route  */}
          </Switch>
        </div>
        {/* </div> */}
      </div>
      <LoadableFooter />
    </div>
  );
};
export default App;
