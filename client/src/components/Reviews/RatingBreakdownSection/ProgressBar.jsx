import React from 'react';
import '../../../css/Reviews/breakdownStyles.css'

const ProgressBar = ({rateData, totalRates, setFilter, rateIdx}) => {

  const handleClick = (e) => {
    e.preventDefault();
    setFilter(rateIdx);
  }

  return(
    <div className='progress-bar-style'>
      <p>{rateIdx} Stars:</p>
      <div className='progress-style' onClick={handleClick}>
        <div className='progress-fill-style' style={{width: `${rateData * 100 / totalRates}%`}} />
      </div>
      <p>{rateData}</p>
    </div>
  );
}

export default ProgressBar;