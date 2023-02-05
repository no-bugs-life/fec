import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SortOption from './SortOption.jsx';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdownSection from './RatingBreakdownSection/RatingBreakdownSection.jsx';
import WriteReviewModal from './WriteReviewModal.jsx';

const ReviewList = ({product_id, productName}) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsOnPage, setReviewsOnPage] = useState([]);
  const [ratingData, setRatingData] = useState({});
  const [writeReview, setWriteReview] = useState(false);

  useEffect(() => {
    callReviewData('relevant');
    callProductData();
  }, []);

  const callReviewData = (sortChoice) => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/', {
        params: {
          "product_id": product_id,
          "sort": sortChoice,
          "count": 20}})
      .then((res) => {
        //console.log(res.data);
        setReviews(res.data.results);
        setReviewsOnPage(res.data.results.slice(0, 2));
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const callProductData = () => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/meta', {params: {"product_id": product_id}})
      .then((res) => {
        //console.log(res.data)
        setRatingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const handleSortChange = (option) => {
    callReviewData(option);
  }

  const showMore = (e) => {
    e.preventDefault();
    let idx = reviewsOnPage.length;
    let newReviewsonPage = reviewsOnPage.slice();
    if ((idx + 2) > reviews.length) {
      newReviewsonPage.push(reviews[idx]);
    } else {
      newReviewsonPage.push(reviews[idx]);
      idx++;
      newReviewsonPage.push(reviews[idx]);
    }
    setReviewsOnPage(newReviewsonPage);
  }

  return (
    <>
      <SortOption handleSortChange={handleSortChange} />
      {Object.keys(reviews).length
      ? <>
          {reviewsOnPage.map((review, idx) =>
            <ReviewTile review={review} key={idx} />
          )}
          {(reviews.length >= 2 && reviews.length != reviewsOnPage.length)
          ? <button onClick={showMore}>More Reviews</button>
          : null}
        </>
      : null
      }
      <RatingBreakdownSection ratingData={ratingData}/>
      <button onClick={() => setWriteReview(true)} >Write Review</button>
      {writeReview
      ? <WriteReviewModal show={writeReview} productName={productName} characteristics={ratingData.characteristics} product_id={product_id}/>
      : null}
    </>
  );
}

export default ReviewList;