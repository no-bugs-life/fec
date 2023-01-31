import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SortOption from './SortOption.jsx';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdownSection from './RatingBreakdownSection/RatingBreakdownSection.jsx'

const ReviewList = ({product_id}) => {

  const [reviews, setReviews] = useState({});

  useEffect(() => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/', {params: {"product_id": 40344}})
        .then((res) => {
          // console.log(res.data.results)
          setReviews(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, []);

  return (
    <>
      <SortOption />
      {Object.keys(reviews).length
      ? <ReviewTile review={reviews[0]}/>
      : null
      }
      <RatingBreakdownSection product_id={product_id}/>
    </>
  );
}

export default ReviewList;