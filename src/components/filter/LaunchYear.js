import React from 'react';

export default function launchYear(props) {
  const { filter, setDisplaySpinner, setFilter } = props;
  const changeSlectedYear = (e) => {
    setDisplaySpinner(true);
    filter.selectedYear === e.target.innerHTML
      ? setFilter({ ...filter, selectedYear: '' })
      : setFilter({ ...filter, selectedYear: e.target.innerHTML });
  };
  const yearArray = Array.from({ length: 15 }, (_, idx) => `${2006 + idx}`);
  const yearList = yearArray.map((curr) => (
    <button
      key={curr}
      onClick={changeSlectedYear}
      className={filter.selectedYear === curr ? 'active' : ''}
    >
      {curr}
    </button>
  ));
  return (
    <div>
      <p className="center-text filter-text">Luanch Year</p>
      <div className="btn-container">{yearList}</div>
    </div>
  );
}
