import React from 'react'

export default function SpaceBar(props) {
  return (
    <div className="box-container space-card" key={props.flight_number}>
      <img src={props.img} alt={props.rocket_name + " image"} />
      <p className="rocket-name">{props.rocket_name}</p>
      <p>Mission Ids:</p>
      <ul>{props.mission_id.length > 0 ? props.mission_id.map(curr=>
        <li key={curr}>{curr}</li>) : 'No missions'}</ul>
      <p>Luanch Year:<span> {props.launch_year}</span></p>
      <p>Successfull Luanch: <span>{"" + props.launch_success} </span></p>
      {/* <p>Successfull Landing:<span> {"" + props.rocket.first_stage.cores[0].land_success}</span></p> */}
    </div>
  )
}
