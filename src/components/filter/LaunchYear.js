import React from 'react';

export default function launchYear(props) {
    const changeSlectedYear = (e) => {
        props.filter.selectedYear === e.target.innerHTML ?
            props.setFilter({ ...props.filter, selectedYear: "" })
            : props.setFilter({ ...props.filter, selectedYear: e.target.innerHTML })
    }
    const yearArray = Array.from({ length: 15 }, (_, idx) => `${2006 + idx}`)
    const yearList = yearArray.map(curr =>
        <button
            key={curr}
            onClick={changeSlectedYear}
            className={props.filter.selectedYear === curr ? 'active' : ''}>
            {curr}
        </button>)
    return (
        <div>
            <p className="center-text filter-text">Luanch Year</p>
            <div className="btn-container">
                {yearList}
            </div>
        </div>
    )
}
