import React from 'react';
import Stars from '../Stars/Stars.jsx'

const ReviewTile = () => {

  return(
    <div>
      <Stars rating={2.5}/>
      <p>Date</p>
      <p>Reviewer Name and verified</p>
      <p>Review Summary</p>
      <p>Review Body w/ show more button</p>
      <img alt='images will go here'/>
      <p>optional Response from seller</p>
      <p>Was this review helpful?</p>
      <button>Yes</button>
      <button>No</button>
    </div>
  );
}

export default ReviewTile;