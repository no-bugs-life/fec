import React from 'react';
import Stars from '../../Stars/Stars.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const RatingBreakdownSection = () => {

  return(
    <>
      <RatingSummary />
      <RatingBreakdown/>
      <ProductBreakdown/>
    </>
  );
}

export default RatingBreakdownSection;