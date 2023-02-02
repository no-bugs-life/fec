import React, {useState, useEffect} from 'react';
import Stars from '../../Stars/Stars.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import axios from 'axios';

const RatingBreakdownSection = ({product_id, ratingData}) => {

  return(
    <>
      {Object.keys(ratingData).length
      ? <>
          <RatingSummary summaryData={ratingData.ratings} />
          <RatingBreakdown summaryData={ratingData.ratings} recommendData={ratingData.recommended} />
          <ProductBreakdown productData={ratingData.characteristics} />
        </>
      : null}

    </>
  );
}

export default RatingBreakdownSection;