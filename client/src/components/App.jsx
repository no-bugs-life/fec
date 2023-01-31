
import React, {useState, useEffect} from "react";
// import Stars from './Stars/Stars.jsx'
// import "../css/styles.css";

// import Description from "./Description.jsx";
// import Images from "./Images.jsx";
// import AddDescription from "./AddDescription.jsx";

import RelatedList from '../components/Prodlists/RelatedList.jsx';
import OutfitList from '../components/Prodlists/OutfitList.jsx'
import QuestionComponent from '../components/Questions/QuestionComponent.jsx';


// import Share from "./Share.jsx";
import axios from "axios";
const App = ()=> {
  // const [em, setEm] = useState([]);
  // const [product, setProduct] = useState({});
  // useEffect(()=> {
  //   axios.get('http://localhost:3000/api/products')
  //   .then(res => {
  //     console.log(res.data)
  //     setEm(res.data)
  //     setProduct(res.data[0]);
  //   })
  //   .catch(err => console.log(err))
  // }, [])

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
      {/* <Description product ={product}/>
      <Images />
      <AddDescription />
      <Share />
      <Stars /> */}
      <RelatedList product={product} />
    </div>
  )

}

export default App;