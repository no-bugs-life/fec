import React, {useState, useEffect} from 'react';
import Stars from '../../Stars/Stars.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import axios from 'axios';

const RatingBreakdownSection = ({product_id}) => {

  const [ratingData, setRatingData] = useState({});

  useEffect(() => {
    if (product_id) {
      axios.get('http://localhost:3000/api/reviews/meta', {params: {"product_id": 40344}})
        .then((res) => {
          // console.log(res.data)
          setRatingData(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
      }
  }, [])

  return(
    <>
      {Object.keys(ratingData).length
      ? <>
          <RatingSummary summaryData={ratingData.ratings} />
          <RatingBreakdown summaryData={ratingData.ratings} recommendData={ratingData.recommended} handleFilter={handleFilterRBS} filters={filters}/>
          <ProductBreakdown productData={ratingData.characteristics} />
        </>
      : null}
    </>
  );
}

export default RatingBreakdownSection;