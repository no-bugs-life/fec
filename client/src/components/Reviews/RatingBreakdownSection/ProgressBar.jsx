import React from 'react';

const ProgressBar = ({rateData, totalRates, setFilter}) => {

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
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