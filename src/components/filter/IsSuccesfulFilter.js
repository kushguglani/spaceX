import React from 'react';

export default function isSuccesfulLaunch(props) {
  const { type, filter, setDisplaySpinner, setFilter } = props;
  const toggleSuccessFull = (val) => {
    setDisplaySpinner(true);
    filter[type] === val
      ? setFilter({ ...filter, [type]: '' })
      : setFilter({ ...filter, [type]: val });
    //redirect
  };
  return (
    <div className="filter-box">
      <p className="center-text filter-text">{props.text}</p>
      <button
        onClick={() => toggleSuccessFull(true)}
        className={filter[type] ? 'active' : ''}
      >
        True
      </button>
      <button
        onClick={() => toggleSuccessFull(false)}
        className={filter[type] === false ? 'active' : ''}
      >
        False
      </button>
    </div>
  );
}
