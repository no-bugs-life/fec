import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SortOption from './SortOption.jsx';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdownSection from './RatingBreakdownSection/RatingBreakdownSection.jsx';
import WriteReviewModal from './WriteReviewModal.jsx';
import Search from './Search.jsx';

const ReviewList = ({product_id, productName}) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsOnPage, setReviewsOnPage] = useState([]);
  const [ratingData, setRatingData] = useState({});
  const [writeReview, setWriteReview] = useState(false);
  const [filters, setFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    callReviewData();
    callProductData();
  }, [filters, searchQuery]);

  const callReviewData = (sortChoice) => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/', {
        params: {
          "product_id": product_id,
          "sort": sortChoice || 'relevant',
          "count": 20}})
      .then((res) => {
        let newReviews = []
        if (searchQuery.length) {
          for (let review of res.data.results) {
            if (review.body.includes(searchQuery) || review.summary.includes(searchQuery)) {
              newReviews.push(review);
            }
          }
        } else {
          newReviews = res.data.results;
        }
        if (filters.length) {
          let newFilteredReviews = [];
          for (let review of newReviews) {
            if (filters.includes(review.rating)) {
              newFilteredReviews.push(review);
            }
          }
          setReviews(newFilteredReviews);
          setReviewsOnPage(newFilteredReviews.slice(0, 2));
        } else {
          setReviews(newReviews);
          setReviewsOnPage(newReviews.slice(0, 2));
        }
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

  const handleFilterRL = (index) => {
    if (typeof index === 'object') {
      setFilters([]);
    } else if (filters.includes(index)) {
      let newFilters = filters.slice();
      for (let i = 0; i < newFilters.length; i++) {
        if (newFilters[i] === index) {
          newFilters.splice(i, 1);
        }
      }
      setFilters(newFilters);
    } else {
      let newFilters = filters.slice();
      newFilters.push(index);
      setFilters(newFilters);
    }
  }

  const getSearchQuery = (query) => {
    if (query.length >= 3) {
      setSearchQuery(query);
    } else {
      setSearchQuery('')
    }
  }

  return (
    <>
      <SortOption handleSortChange={handleSortChange} />
      <Search getQuery={getSearchQuery}/>
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
      <RatingBreakdownSection ratingData={ratingData} handleFilter={handleFilterRL} filters={filters}/>
      <button onClick={() => setWriteReview(true)} >Write Review</button>
      {writeReview
      ? <WriteReviewModal setWriteReview={setWriteReview} productName={productName} characteristics={ratingData.characteristics} product_id={product_id}/>
      : null}
    </>
  );
}

export default ReviewList;