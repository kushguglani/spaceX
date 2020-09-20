import React from 'react';

import SpaceBar from './SpaceBar';

const SpaceBarContainer = (props) => {
  const data = props.spacex.length > 0 ? props.spacex.map(space => {
    const { flight_number, links, rocket, mission_id, launch_year, launch_success } = space;
    return <SpaceBar
      flight_number={flight_number}
      rocket_name={rocket.rocket_name}
      mission_id={mission_id}
      launch_year={launch_year}
      launch_success={launch_success}
      img={links.mission_patch}
      key={space.flight_number}
    />
    // <div className="box-container space-card" key={space.flight_number}>
    //   <img src={space.links.mission_patch} alt={space.rocket.rocket_name + " image"} />
    //   <p className="rocket-name">{space.rocket.rocket_name}</p>
    //   <p>Mission Ids:
    // <span>{space.mission_id.length > 0 ? space.mission_id.map(curr =>
    //     <ul><li>{curr}</li></ul>) : 'No missions'}</span></p>
    //   <p>Luanch Year:<span> {space.launch_year}</span></p>
    //   <p>Successfull Luanch: <span>{"" + space.launch_success} </span></p>
    //   <p>Successfull Landing:<span> {"" + space.rocket.first_stage.cores[0].land_success}</span></p>
    // </div>
  }) : 'No SpaceX Found';
  return (
    <div className="space-container">
      {data}
    </div>
  );
};

export default SpaceBarContainer;
