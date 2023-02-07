import React from 'react';

const ProgressBar = ({rateData, totalRates, setFilter, rateIdx}) => {

  const handleClick = (e) => {
    e.preventDefault();
    setFilter(rateIdx);
  }

  return(
    <>
    <div className='progressStyle' onClick={handleClick}>
      <div className='progressFillStyle' style={{width: `${rateData * 100 / totalRates}%`}} />
    </div>
    <p>{rateData}</p>
    </>
  );
}

export default ProgressBar;