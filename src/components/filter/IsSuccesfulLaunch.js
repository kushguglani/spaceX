import React from 'react'

export default function isSuccesfulLaunch(props) {
  const toggleSuccessFull = (val) => {
    props.setFilter({ ...props.filter, successfullLaunch: val });

    props.filter.successfullLaunch === val ?
      props.setFilter({ ...props.filter, successfullLaunch: "" })
      : props.setFilter({ ...props.filter, successfullLaunch: val });
    //redirect

  }
  return (
    <div className="filter-box">
      <p className="center-text filter-text">{props.text}</p>
      <button
        onClick={() => toggleSuccessFull(true)}
        className={props.filter.successfullLaunch === true ? 'active' : ''}>
        True
      </button>
      <button
        onClick={() => toggleSuccessFull(false)}
        className={props.filter.successfullLaunch === false ? 'active' : ''}>
        False
      </button>
    </div>
  )
}
