
import React, {useState, useEffect,lazy, Suspense} from "react";
import axios from "axios";

import LoadingScreen from './LoadingScreen/LoadingScreen.jsx'
import Skull from './Common/Skull.jsx'

const Description = lazy(() => import("./Overview/Description.jsx")) ;
const ReviewList = lazy(() => import('./Reviews/ReviewList.jsx'))
const RelatedList = lazy(() => import('./Prodlists/RelatedList.jsx'));
const OutfitList = lazy(() => import('./Prodlists/OutfitList.jsx'));
const QuestionComponent = lazy(() => import('../components/Questions/QuestionComponent.jsx')) ;
const QuestionMounted = lazy(() => import('../components/Questions/QuestionMounted.jsx')) ;



import "../css/Overview/styles.css";

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
      <Suspense fallback= {<div><LoadingScreen /></div>}>
        {
          Object.keys(product).length > 0 ?
            <>
              <div className="top">
                <div className='top-skull'>
                  <Skull color="#E8EDDF"/>
                </div>
                <span className="logo">Cold Topic</span>
              </div>

              <Description product ={product}/>

              <ReviewList product_id={40352} productName={product.name}/>

              <QuestionMounted product={product} setProduct={setProduct}/>

              <RelatedList product={product}/>
              <OutfitList product={product}/>
            </>
          :
          null
        }
      </Suspense>

    </div>


  )
}

export default App;