import React from 'react';
import Stars from '../../Stars/Stars.jsx';

const RatingSummary = () => {

  return(
    <div>
      <h2>Rating Summary</h2>
      <Stars rating={2.5}/>
      <p>2.5 out of 5 stars based on 2 reviews</p>
    </div>
  );
}

export default RatingSummary;