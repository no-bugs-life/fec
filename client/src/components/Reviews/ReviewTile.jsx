import React, {useState} from 'react';
import Stars from '../Stars/Stars.jsx';
import axios from 'axios';
import '../../css/Reviews/styles.css'

const ReviewTile = ({review}) => {

  // console.log(review);

  const addHelpful = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/reviews/${review.review_id}/helpful`);
  }

  return(
    <div className='reviewTile'>
      <Stars rating={review.rating} tag={review.review_id} size={'50px'}/>
      <p>{review.date}</p>
      <p>{review.reviewer_name}</p>
      <b>{review.summary}</b>
      <p>{review.body.length <= 250
          ? review.body
          : <>
              {review.body.substring(0, 250)}
              <button>Show More</button>
            </>
        }
      </p>
      {review.recommend
      ? 'I recommend this product ✓'
      : null}
      <br/>
      {review.photos.map((photo, idx) =>
        <img src={photo.url} alt='image not available' key={idx} height={150} width={150}/>
      )}
      {review.response
      ? review.response
      : null}
      <p>Was this review helpful?</p>
      <button onClick={addHelpful}>Yes</button>
      <button>No</button>
      <p>{review.helpfulness}</p>
    </div>
  );
}

export default ReviewTile;