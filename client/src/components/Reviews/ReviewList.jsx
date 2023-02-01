import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SortOption from './SortOption.jsx';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdownSection from './RatingBreakdownSection/RatingBreakdownSection.jsx'

const ReviewList = ({product_id}) => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    callData();
  }, []);

  const callData = () => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/', {params: {"product_id": 40345}})
        .then((res) => {
          console.log(res.data.results)
          setReviews(res.data.results);
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
      <RatingBreakdownSection product_id={product_id}/>
    </>
  );
}

export default ReviewList;