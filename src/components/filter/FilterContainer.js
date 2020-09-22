import React from 'react';

import LaunchYear from './LaunchYear';
import IsSuccesfulFilter from './IsSuccesfulFilter';

function filterContainer({ filter, setFilter, setDisplaySpinner }) {
  return (
    <div className="box-container">
      <h3 className="filter-heading">Filters</h3>
      <LaunchYear
        filter={filter}
        setFilter={setFilter}
        setDisplaySpinner={setDisplaySpinner}
        data-testid="launchYear"
      />
      <IsSuccesfulFilter
        text="Successfull Launch"
        filter={filter}
        setFilter={setFilter}
        setDisplaySpinner={setDisplaySpinner}
        data-testid="successLaunch"
        type="successfullLaunch"
      />
      <IsSuccesfulFilter
        text="Successfull Landing"
        filter={filter}
        setFilter={setFilter}
        setDisplaySpinner={setDisplaySpinner}
        data-testid="successLand"
        type="successfullLanding"
      />
    </div>
  );
}
export default filterContainer;
