import React, {useState, useEffect} from 'react';
import Stars from '../Stars/Stars.jsx';
import Image from './Image.jsx'
import axios from 'axios';
import '../../css/Reviews/tileStyles.css'

const ReviewTile = ({review}) => {

  const [showBody, setShowBody] = useState(true);
  const [showHelpful, setShowHelpful] = useState(true);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);

  useEffect(() => {
    console.log('reviewTile')
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

  const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }

  return(
    <div className='review-tile'>
      <div className='review-tile-header'>
        <Stars className='review-tile-stars' rating={review.rating} tag={review.review_id} size={'50px'} isRating={true}/>
        <p className='date'>{new Date(review.date).toLocaleDateString()}</p>
      </div>
      <div className='review-tile-body'>
        <p>{'Posted by: ' + review.reviewer_name}</p>
        <h3>{review.summary}</h3>
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
        {review.photos.map((photo, idx) => {
          if (isValidUrl(photo.url)) {
            return <Image url={photo.url} key={idx} />
          }
        }
        )}
        {review.response
        ? review.response
        : null}
      </div>
      <div className='review-tile-footer'>
        <p>Was this review helpful?</p>
        {showHelpful
        ?
        <>
          <button onClick={addHelpful}>Yes</button>
          <button onClick={() => setShowHelpful(false)}>No</button>
        </>
        : <small>Thank you for your feedback</small>}
        <p>{helpfulness}</p>
      </div>
    </div>
  );
}

export default ReviewTile;