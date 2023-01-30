import React from 'react';
import SortOption from './SortOption.jsx';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdownSection from './RatingBreakdownSection/RatingBreakdownSection.jsx'

const ReviewList = () => {

  return (
    <>
      <SortOption />
      <ReviewTile />
      <RatingBreakdownSection />
    </>
  );
}

export default ReviewList;