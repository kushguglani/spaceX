import React from 'react';
import { render } from '@testing-library/react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ServerDataProvider } from '../../state/serverDataContext';
import App from '../App';

describe('App', () => {
  it('renders default App with server data', () => {
    render(
      <BrowserRouter>
        <ServerDataProvider
          value={{
            spaceX: [
              {
                flight_number: 14,
                mission_name: 'CRS-3',
                mission_id: ['EE86F74'],
                launch_year: '2014',
                launch_window: 0,
                rocket: {
                  rocket_id: 'falcon9',
                  rocket_name: 'Falcon 9',
                },
                launch_success: true,
                links: {
                  mission_patch:
                    'https://images2.imgbox.com/ff/81/EOWojaSj_o.png',
                },
              },
            ],
          }}
        >
          <Switch>
            <App />
          </Switch>
        </ServerDataProvider>
      </BrowserRouter>
    );
  });
});
