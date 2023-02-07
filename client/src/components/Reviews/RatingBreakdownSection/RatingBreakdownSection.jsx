import React, {useState, useEffect} from 'react';
import Stars from '../../Stars/Stars.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import '../../../css/Reviews/breakdownStyles.css'
import axios from 'axios';

const RatingBreakdownSection = ({product_id, ratingData, handleFilter, filters}) => {

  const handleFilterRBS = (index) => {
    handleFilter(index);
  }

  return(
    <>
      {Object.keys(ratingData).length
      ? <div className='rating-breakdown-style'>
          <RatingSummary summaryData={ratingData.ratings} />
          <RatingBreakdown summaryData={ratingData.ratings} recommendData={ratingData.recommended} handleFilter={handleFilterRBS} filters={filters}/>
          <ProductBreakdown productData={ratingData.characteristics} />
        </div>
      : null}
    </>
  );
}

export default RatingBreakdownSection;