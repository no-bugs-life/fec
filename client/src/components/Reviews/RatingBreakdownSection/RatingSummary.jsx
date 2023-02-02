import React, {useEffect, useState} from 'react';
import Stars from '../../Stars/Stars.jsx';

const RatingSummary = ({summaryData}) => {

  let [rateAvg, setRateAvg] = useState(0);
  let [rateCountTotal, setRateCountTotal] = useState(0)

  useEffect(() => {
    // if (summaryData) {
      let rateSum = 0;
      let rateCount = 0;
      for (let i = 0; i < 5; i++) {
        rateSum += (parseInt(Object.keys(summaryData)[i]) * parseInt(Object.values(summaryData)[i]));
        rateCount += parseInt(Object.values(summaryData)[i]);
      }
      setRateAvg(rateSum / rateCount);
      setRateCountTotal(rateCount);
    // }
  }, [rateAvg])

  return(
    <div>
      <h3>Rating Summary</h3>
      {rateAvg > 0
      ? <>
          <Stars rating={rateAvg} tag={'ratingSummary'} size={'50px'} />
          <p> {rateAvg.toFixed(1)} out of 5 stars based on {rateCountTotal} reviews</p>
        </>
      : null}
    </div>
  );
}

export default RatingSummary;