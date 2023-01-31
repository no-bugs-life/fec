import React from 'react';

const ProgressBar = ({rateData, totalRates}) => {

  return(
    <>
    <div className='progressStyle' >
      <div className='progressFillStyle' style={{width: `${rateData * 100 / totalRates}%`}} />
    </div>
    <p>{rateData}</p>
    </>
  );
}

export default ProgressBar;