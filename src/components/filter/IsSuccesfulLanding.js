import React from 'react'

export default function isSuccesfulLanding(props) {
  const toggleSuccessFull = (val) => {
    props.filter.successfullLanding === val ?
    props.setFilter({ ...props.filter, successfullLanding: "" })
    : props.setFilter({ ...props.filter, successfullLanding: val });
  }
  return (
    <div className="filter-box">
      <p className="center-text filter-text">{props.text}</p>
      <button
        onClick={() => toggleSuccessFull(true)}
        className={props.filter.successfullLanding === true ? 'active' : ''}>
        True
      </button>
      <button
        onClick={() => toggleSuccessFull(false)}
        className={props.filter.successfullLanding === false ? 'active' : ''}>
        False
      </button>
    </div>
  )
}
