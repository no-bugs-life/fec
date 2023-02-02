import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SortOption from './SortOption.jsx';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdownSection from './RatingBreakdownSection/RatingBreakdownSection.jsx';
import WriteReviewModal from './WriteReviewModal.jsx';

const ReviewList = ({product_id, productName}) => {

  const [reviews, setReviews] = useState([]);
  const [ratingData, setRatingData] = useState({});
  const [writeReview, setWriteReview] = useState(false);

  useEffect(() => {
    callReviewData();
    callProductData();
  }, []);

  const callReviewData = () => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/', {params: {"product_id": 40345}})
      .then((res) => {
        //console.log(res.data);
        setReviews(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const callProductData = () => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/meta', {params: {"product_id": 40344}})
      .then((res) => {
        //console.log(res.data)
        setRatingData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const handleSortChange = (option) => {
    if (option === 'Helpful') {
      let newReviews = reviews.slice();
      newReviews.sort((a, b) => b.helpfulness - a.helpfulness);
      setReviews(newReviews);
    } else if (option === 'Newest') {
      let newReviews = reviews.slice();
      newReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      setReviews(newReviews);
    } else {
      callData();
    }
  }

  return (
    <>
      <SortOption handleSortChange={handleSortChange} />
      {Object.keys(reviews).length
      ? <>
          <ReviewTile review={reviews[0]} />
          <ReviewTile review={reviews[1]} />
        </>
      : null
      }
      <RatingBreakdownSection ratingData={ratingData}/>
      <button onClick={() => setWriteReview(true)}>Write Review</button>
      {writeReview
      ? <WriteReviewModal show={writeReview} productName={productName} characteristics={ratingData.characteristics}/>
      : null}
    </>
  );
}

export default ReviewList;