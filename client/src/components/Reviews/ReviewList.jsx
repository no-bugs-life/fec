import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SortOption from './SortOption.jsx';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdownSection from './RatingBreakdownSection/RatingBreakdownSection.jsx';
import WriteReviewModal from './WriteReviewModal.jsx';
import Search from './Search.jsx';
import '../../css/Reviews/listStyles.css'

const ReviewList = ({product_id, productName}) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsOnPage, setReviewsOnPage] = useState([]);
  const [ratingData, setRatingData] = useState({});
  const [writeReview, setWriteReview] = useState(false);
  const [filters, setFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [charIds, setCharIds] = useState([]);

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
            if (review.body.toLowerCase().includes(searchQuery.toLowerCase()) || review.summary.toLowerCase().includes(searchQuery.toLowerCase())) {
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
        setRatingData(res.data);
        let newCharacteristics = [];
        for (let i = 0; i < Object.values(res.data.characteristics).length; i++) {
          newCharacteristics.push(Object.values(res.data.characteristics)[i].id);
        }
        setCharIds(newCharacteristics);
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

  const openWriteReview = () => {
    setWriteReview(true)
    document.body.style.overflowY = 'hidden';
  }

  return (
    <>
      <div className='left-reviews' id="review">
        <RatingBreakdownSection ratingData={ratingData} handleFilter={handleFilterRL} filters={filters}/>
        <button onClick={openWriteReview} >Write Review</button>
        {writeReview
      ? <WriteReviewModal setWriteReview={setWriteReview} productName={productName} charIds={charIds} characteristics={ratingData.characteristics} product_id={product_id}/>
      : null}
      </div>
      <div className='right-reviews'>
        <div className='right-reviews-header'>
          <SortOption handleSortChange={handleSortChange} />
          <Search getQuery={getSearchQuery}/>
        </div>
        <div className='right-reviews-cards'>
          {Object.keys(reviews).length
          ? <>
              {reviewsOnPage.map((review, idx) =>
                <ReviewTile review={review} key={idx} />
              )}
            </>
          : null
          }
        </div>
        {(reviews.length >= 2 && reviews.length !== reviewsOnPage.length)
          ? <button onClick={showMore}>More Reviews</button>
          : null}
      </div>
      <br/>
    </div>
  );
}

export default ReviewList;