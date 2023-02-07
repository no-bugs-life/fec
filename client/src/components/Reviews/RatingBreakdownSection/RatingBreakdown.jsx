import React, {useEffect, useState} from 'react';
import ProgressBar from './ProgressBar.jsx'

const RatingBreakdown = ({summaryData, recommendData, handleFilter, filters}) => {

  let [totalRates, setTotalRates] = useState(0);

  useEffect(() => {
    let rateCount = 0;
    for (let i = 0; i < 5; i++) {
      rateCount += parseInt(Object.values(summaryData)[i]);
    }
    setTotalRates(rateCount);
  }, []);

  const handleFilterRB = (index) => {
    handleFilter(index);
  }

  return(
    <>
    {Object.keys(summaryData)
    ? <>
        <h3>Rating Breakdown</h3>
        {filters.length
        ? <>
            {'Filters: ' + filters}
            <br/>
            <button onClick={() => handleFilterRB(filters)}>Remove All Filters</button>
            <br/>
        </>
        : null}
        <label>
          <ProgressBar rateData={summaryData['5']} totalRates={totalRates} setFilter={handleFilterRB} rateIdx={5}/>
        </label>
        <label>
          <ProgressBar rateData={summaryData['4']} totalRates={totalRates} setFilter={handleFilterRB} rateIdx={4}/>
        </label>
        <label>
          <ProgressBar rateData={summaryData['3']} totalRates={totalRates} setFilter={handleFilterRB} rateIdx={3}/>
        </label>
        <label>
          <ProgressBar rateData={summaryData['2']} totalRates={totalRates} setFilter={handleFilterRB} rateIdx={2}/>
        </label>
        <label>
          <ProgressBar rateData={summaryData['1']} totalRates={totalRates} setFilter={handleFilterRB} rateIdx={1}/>
        </label>
        {(parseInt(recommendData.true) / (parseInt(recommendData.false) + parseInt(recommendData.true)) * 100).toFixed(2) + '% Recommended'}
      </>
    : null
    }
    </>
  );
}

export default RatingBreakdown;