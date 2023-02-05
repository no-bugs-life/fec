import React, {useState, useEffect} from 'react';
import Stars from '../Stars/Stars.jsx';
import Image from './Image.jsx'
import axios from 'axios';
import '../../css/Reviews/styles.css'

const ReviewTile = ({review}) => {

  const [showBody, setShowBody] = useState(true);
  const [showHelpful, setShowHelpful] = useState(true);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);

  useEffect(() => {
    setHelpfulness(review.helpfulness)
  }, [review])

  const addHelpful = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/reviews/${review.review_id}/helpful`)
    .then((res) => null)
    .catch((err) => console.log(err))
    let newHelp = helpfulness + 1;
    setHelpfulness(newHelp)
    setShowHelpful(false);
  }

  return(
    <div className='reviewTile'>
      <Stars rating={review.rating} tag={review.review_id} size={'50px'}/>
      <p>{Date(review.date).slice(4, 16)}</p>
      <p>{review.reviewer_name}</p>
      <b>{review.summary}</b>
      <p>{review.body.length <= 250
          ? review.body
          : <>
              {showBody
              ? <>
                {review.body.substring(0, 250)}
                <button onClick={() => setShowBody(false)} >Show More</button>
              </>
              : review.body
              }
            </>
        }
      </p>
      {review.recommend
      ? 'I recommend this product ✓'
      : null}
      <br/>
      {review.photos.map((photo, idx) =>
        <Image url={photo.url} key={idx} />
      )}
      {review.response
      ? review.response
      : null}
      <p>Was this review helpful?</p>
      {showHelpful
      ? <>
        <button onClick={addHelpful}>Yes</button>
        <button onClick={() => setShowHelpful(false)}>No</button>
      </>
      : null}
      <p>{helpfulness}</p>
    </div>
  );
}

export default ReviewTile;