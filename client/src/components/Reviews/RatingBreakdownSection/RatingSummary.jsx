import React, {useEffect, useState} from 'react';
import Stars from '../../Stars/Stars.jsx';

const RatingSummary = ({summaryData, isHead}) => {

  let [rateAvg, setRateAvg] = useState(0);
  let [rateCountTotal, setRateCountTotal] = useState(0)

  useEffect(() => {
    let rateSum = 0;
    let rateCount = 0;
    for (let i = 0; i < 5; i++) {
      rateSum += (parseInt(Object.keys(summaryData)[i]) * parseInt(Object.values(summaryData)[i]));
      rateCount += parseInt(Object.values(summaryData)[i]);
    }
    setRateAvg(rateSum / rateCount);
    setRateCountTotal(rateCount);
  }, [rateAvg])

  return(
    <div>
      {isHead ? null : null}
      {rateAvg > 0 && isHead
      ? <>
          <Stars rating={rateAvg} tag={'ratingSummary'}/>
          <span>{rateAvg.toFixed(1)}<a href="#review" className="rating-link">{`(${rateCountTotal})`}</a></span>
        </>
      : rateAvg > 0
      ? <div className='ratings-summary-header'>
          <p className='ratings-summary-header-avg'><b>{rateAvg.toFixed(1)}</b></p>
          <div className='ratings-summary-header-flavor'>
            <Stars rating={rateAvg} tag={'ratingSummarySection'} size={'30px'} isRating={true}/>
            <p>out of 5 stars based on <b>{rateCountTotal}</b> reviews</p>
          </div>


        </div>
      : <div>
      <Stars rating={0} tag={'ratingSummary'}/>
      <span>No reviews yet</span>
    </div>}
    </div>
  );
}

export default RatingSummary;