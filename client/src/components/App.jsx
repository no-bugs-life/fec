
import React, {useState, useEffect} from "react";
import "../css/styles.css";

import Description from "./Description.jsx";
import Images from "./Images.jsx";
import AddDescription from "./AddDescription.jsx";

import RelatedList from '../components/Prodlists/RelatedList.jsx';
import OutfitList from '../components/Prodlists/OutfitList.jsx';
import QuestionComponent from '../components/Questions/QuestionComponent.jsx';

import ReviewList from './Reviews/ReviewList.jsx'
import Share from "./Share.jsx";
import axios from "axios";

const App = ()=> {
  const [em, setEm] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(()=> {
    //if (Object.keys(product).length) {
      axios.get('http://localhost:3000/api/products')
      .then(res => {
        // console.log(res.data)
        setEm(res.data)
        setProduct(res.data[0]);
      })
      .catch(err => console.log(err))
    //}
  }, [])

  return(
    <div className="product-main">
      {/* <Description product ={product}/>
      <Images />
      <AddDescription />
      <Share /> */}
      <ReviewList product_id={40344}/>
    </div>
  )

}

export default App;