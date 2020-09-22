import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import App from './components/App';
import { ServerDataProvider } from './state/serverDataContext';

import { createMemoryHistory } from 'history';

import './styles/index.scss';

const serverData = window.__SERVER_DATA__;
export const main = () => {
  const history = createMemoryHistory();
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <ServerDataProvider value={serverData}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </ServerDataProvider>,
      document.getElementById('root')
    );
  });
};
