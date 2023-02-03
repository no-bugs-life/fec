
import React, {useState, useEffect} from "react";
// import "../css/Overview/styles.css";

// import Description from "./Overview/Description.jsx";

// import ReviewList from './Reviews/ReviewList.jsx'

import {RelatedList, OutfitList, ComparisonModal} from './Prodlists'

// import QuestionComponent from '../components/Questions/QuestionComponent.jsx';
// import QuestionMounted from '../components/Questions/QuestionMounted.jsx';


import axios from "axios";

const App = ()=> {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      axios.get('/api/products',{params:{count:30}})
        .then(res => {
          setProduct(res.data[4]);
        })
        .catch(err => console.log(err))
    },
    []
  );


  return(
    <div className="product-main">
      {/* Overview */}
      {/* {Object.keys(product).length > 0 ? <Description product ={product}/> : null} */}

      {/* Review & Ratings */}
      {/* <ReviewList product_id={40344}/> */}

      {/* Questions */}
      {/* <div className="questions">
        <QuestionMounted product={product} setProduct={setProduct}/>
      </div> */}

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