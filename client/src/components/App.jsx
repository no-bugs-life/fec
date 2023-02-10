
import React, {useState, useEffect} from "react";

import LoadingScreen from './LoadingScreen/LoadingScreen.jsx'

import "../css/Overview/styles.css";
import Description from "./Overview/Description.jsx";

import ReviewList from './Reviews/ReviewList.jsx'

import {RelatedList, OutfitList, ComparisonModal} from './Prodlists'

import QuestionComponent from '../components/Questions/QuestionComponent.jsx';
import QuestionMounted from '../components/Questions/QuestionMounted.jsx';

import axios from "axios";


const App = ()=> {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      setTimeout(
        () => {
          axios.get('/api/products',{params:{count:30}})
            .then(res => {
              // console.log(res.data[0])
              window.dispatchEvent(new Event('loadDone'))
              setProduct(res.data[2]);
            })
            .catch(err => console.log(err))
        }
        ,
      1000)
    },
    []
  );


  return(

    <div className="product-main app">
      {
        Object.keys(product).length > 0 ?
          <>
            <div className="top">
              <span className="logo">Logo</span>
            </div>

            {/* Overview */}
            <Description product ={product}/>
            {/* Review & Ratings */}
            <ReviewList product_id={40352} productName={product.name}/>
            {/* Questions */}
            <QuestionMounted product={product} setProduct={setProduct}/>
            {/* Related Items & Comparison */}
            <RelatedList
              product={product}
            />
            <OutfitList
              product={product}
            />
          </>
          :
          <LoadingScreen />
      }
    </div>


  )
}

export default App;