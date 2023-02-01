
import React, {useState, useEffect} from "react";
import "../css/styles.css";

import {RelatedList, OutfitList, ComparisonModal} from './Prodlists'

import Description from "./Description.jsx";
import Images from "./Images.jsx";
import AddDescription from "./AddDescription.jsx";

import ReviewList from './Reviews/ReviewList.jsx'
import Share from "./Share.jsx";
import axios from "axios";

const App = ()=> {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      axios.get('/api/products',{params:{count:30}})
        .then(res => {
          setProduct(res.data[0]);
        })
        .catch(err => console.log(err))
    },
    []
  );


  return(
    <div className="product-main">
      {/* Review & Ratings */}
      <ReviewList product_id={40344}/>

      {/* Related Items & Comparison */}
      <RelatedList
        product={product}
      />
      <OutfitList
        product={product}
      />
    </div>
  )

}

export default App;