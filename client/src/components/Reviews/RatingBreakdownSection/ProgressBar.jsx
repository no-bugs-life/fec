import React from 'react';
import '../../../css/Reviews/breakdownStyles.css'

const ProgressBar = ({rateData, totalRates, setFilter, rateIdx}) => {

  const handleClick = (e) => {
    e.preventDefault();
    setFilter(rateIdx);
  }

  return(
    <div className='progress-bar-style'>
      <p className='progress-bar-star-value'><u>{rateIdx + ' stars:'}</u></p>
      <div className='progress-style' onClick={handleClick}>
        <div className='progress-fill-style' style={{width: `${rateData * 100 / totalRates}%`}} />
        <p className='progress-fill-count'>{rateData}</p>
      </div>

    </div>
  );
}

export default ProgressBar;