import React from 'react';
import { render, screen } from '@testing-library/react';
import SpaceBarContainer from '../spaceBar/SpaceBarContainer';

describe('SpaceBarContainer', () => {
  it('renders SpaceBar without space data', () => {
    render(<SpaceBarContainer spacex={[]} text="Successfull Launch" />);
    const spaceXText = screen.getByText('No SpaceX Found');
    expect(spaceXText).toBeInTheDocument();
  });
  it('render SpaceBarContainer with space data', () => {
    const space = [
      {
        flight_number: 14,
        mission_name: 'CRS-3',
        mission_id: ['EE86F74'],
        launch_year: '2014',
        launch_window: 0,
        rocket: {
          rocket_id: 'falcon9',
          rocket_name: 'Falcon 9',
          rocket_type: 'v1.1',
        },
        launch_success: true,
        links: {
          mission_patch: 'https://images2.imgbox.com/ff/81/EOWojaSj_o.png',
        },
      },
    ];
    render(<SpaceBarContainer spacex={space} />);
  });
});
