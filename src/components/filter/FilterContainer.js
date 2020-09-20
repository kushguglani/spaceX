import React from 'react'

import LaunchYear from './LaunchYear';
import IsSuccesfulLaunch from './IsSuccesfulLaunch';
import IsSuccesfulLanding from './IsSuccesfulLanding';

export default function filterContainer(props) {
    return (
        <div className="box-container">
            <h3 className="filter-heading">Filters</h3>
            <LaunchYear
                filter={props.filter}
                setFilter={props.setFilter}
                data-testid="launchYear" />
            <IsSuccesfulLaunch
                text="Successfull Launch"
                filter={props.filter}
                setFilter={props.setFilter}
                data-testid="successLaunch" />
            <IsSuccesfulLanding
                text="Successfull Landing"
                filter={props.filter}
                setFilter={props.setFilter}
                data-testid="successLand" />
        </div>
    )
}
