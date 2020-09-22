import React from 'react';

export default function SpaceBar(props) {
  const {
    flight_number,
    img,
    rocket_name,
    mission_id,
    launch_year,
    launch_success
  } = props;
  return (
    <div className="box-container space-card" key={flight_number}>
      <img src={img} alt={rocket_name + ' image'} />
      <p className="rocket-name">{rocket_name}</p>
      <p>Mission Ids:</p>
      <ul>
        {mission_id.length > 0
          ? mission_id.map(curr => <li key={curr}>{curr}</li>)
          : 'No missions'}
      </ul>
      <p>
        Luanch Year:<span> {launch_year}</span>
      </p>
      <p>
        Successfull Luanch: <span>{'' + launch_success} </span>
      </p>
      {/* <p>Successfull Landing:<span> {"" + props.rocket.first_stage.cores[0].land_success}</span></p> */}
    </div>
  );
}
