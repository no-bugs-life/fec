import React from 'react';
import Stars from '../Stars/Stars.jsx'

const WriteReviewModal = ({show, productName}) => {

  return (
    <div className='modal'>
      <div>
        <h3>Write Your Review</h3>
        <h5>About the {productName}</h5>
      </div>
      <div>
        <form>
          <label>
            Overall Rating
            <Stars rating={0} tag={'writeReview'} />
          </label>
        </form>
      </div>
    </div>
  );
}

export default WriteReviewModal;