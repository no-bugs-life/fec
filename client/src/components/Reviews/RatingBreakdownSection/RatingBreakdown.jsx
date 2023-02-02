import React, {useEffect, useState} from 'react';
import ProgressBar from './ProgressBar.jsx'

const RatingBreakdown = ({summaryData, recommendData}) => {

  let [totalRates, setTotalRates] = useState(0);

  useEffect(() => {
    let rateCount = 0;
    for (let i = 0; i < 5; i++) {
      rateCount += parseInt(Object.values(summaryData)[i]);
    }
    setTotalRates(rateCount);
  }, []);

  const handleFilter = () => {

  }

  return(
    <>
    {Object.keys(summaryData)
    ? <>
        <h3>Rating Breakdown</h3>
        <label>
          5 Stars:
          <ProgressBar rateData={summaryData['5']} totalRates={totalRates} setFilter={handleFilter} />
        </label>
        <label>
          4 Stars:
          <ProgressBar rateData={summaryData['4']} totalRates={totalRates} setFilter={handleFilter} />
        </label>
        <label>
          3 Stars:
          <ProgressBar rateData={summaryData['3']} totalRates={totalRates} setFilter={handleFilter} />
        </label>
        <label>
          2 Stars:
          <ProgressBar rateData={summaryData['2']} totalRates={totalRates} setFilter={handleFilter} />
        </label>
        <label>
          1 Stars:
          <ProgressBar rateData={summaryData['1']} totalRates={totalRates} setFilter={handleFilter} />
        </label>
        {(parseInt(recommendData.true) / (parseInt(recommendData.false) + parseInt(recommendData.true)) * 100).toFixed(2) + '% Recommended'}
      </>
    : null
    }
    </>
  );
}

export default RatingBreakdown;