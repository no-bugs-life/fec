import React, {useState, useEffect} from "react";

import Name from "./Name.jsx";
import Images from "./Images.jsx";
import Styles from "./Styles.jsx"
import Size from "./Size.jsx";
import Quantity from "./Quantity.jsx";
import AddDescription from "./AddDescription.jsx";
import Share from "./Share.jsx";
import RatingSummary from "../Reviews/RatingBreakdownSection/RatingSummary.jsx";
import axios from "axios";


const Description = ({product}) => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentStyle, setCurrentStyle] = useState([]);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [currentPick, setCurrentPick] = useState({});
  const [currentInventory, setCurrentInventory] = useState({});
  const [currentSize, setCurrentSize] = useState("");
  const [defaultPhoto, setDefaultPhoto] = useState({});
  const [ratingData, setRatingData] = useState({});
  const [isHead, setIsHead] = useState(true);

  const onClick = (e) => {
    Array.from(e.currentTarget.parentElement.children).forEach(child => child.children[0].removeAttribute("id"));
    e.target.setAttribute('id', 'toggle-on');
    const selectedStyle = e.currentTarget.getAttribute("id") || 0;
    setCurrentPhotos(currentStyle[selectedStyle].photos);
    setCurrentName(currentStyle[selectedStyle].name);
    setCurrentPick(currentStyle[selectedStyle])
    setCurrentInventory(currentStyle[selectedStyle].skus)
    setCurrentSize(Object.keys(currentStyle[selectedStyle].skus)[0])
    setDefaultPhoto(currentStyle[selectedStyle].photos[0])
  }   
  const onSizeClick = (e)=> {
    
    // console.log(Object.keys(currentInventory)[e.target.id])
    // console.log(currentInventory)
    setCurrentSize(Object.keys(currentInventory)[e.target.id]);
    Array.from(e.currentTarget.parentElement.children).forEach(child => child.removeAttribute("id"));
    e.currentTarget.setAttribute('id', 'toggle-on');
  }
  const onModalClick = (e)=> {

  }

  useEffect(() => {
    Promise.all([ axios.get(`/api/products/${product.id}`),  axios.get(`/api/products/${product.id}/styles`), axios.get('http://localhost:3000/api/reviews/meta', {params: {"product_id": product.id}})])
    .then((results) => {
      setCurrentProduct(results[0].data);
      setCurrentStyle(results[1].data.results);
      setCurrentPick(results[1].data.results[0]);
      setCurrentPhotos(results[1].data.results[0].photos);
      setDefaultPhoto(results[1].data.results[0].photos[0]);
      setCurrentName(results[1].data.results[0].name);
      setCurrentInventory(results[1].data.results[0].skus);
      setCurrentSize(Object.keys(results[1].data.results[0].skus)[0]);
      setRatingData(results[2].data)
    })
    .catch(err => {console.log(err)})
    },[])

  
  return (
    <div className = "description">
      <div className = "category">
        <p>{currentProduct.category}</p>
      </div>
      <div className = "img">
        {currentPhotos.length > 0 ? <Images photos = {currentPhotos} defaultPhoto={defaultPhoto} setDefaultPhoto={setDefaultPhoto} onModalClick={onModalClick}
        /> : null}
      </div>
      <div className="item-description">
        <h2>{currentProduct.name}</h2>
         {currentPick ? <Name currentPick={currentPick}/> : null}
         <div className="ratings">
         {Object.keys(ratingData).length > 0 && <RatingSummary summaryData={ratingData.ratings} isHead={isHead}/>}
         </div>
        <div className="item-styles">
          <span>Style: {currentName && currentName}</span>
          {currentStyle ? <Styles currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} setCurrentPhotos={setCurrentPhotos} onClick={onClick}/> : null}
        </div>
        <div className="size">
        <span>Size</span>
          {Object.keys(currentInventory).length > 0 ? <Size currentInventory = {currentInventory} onSizeClick={onSizeClick}/> : null}
        </div>
        <div className="quantity">
          {currentSize.length > 0 && Object.keys(currentInventory).length > 0 ? <Quantity currentSize={currentSize} currentInventory={currentInventory} /> : null}
        </div>
        <button> Add to Cart</button>
      </div>
      <div className="add-description">
        {Object.keys(currentProduct).length > 0 ? <AddDescription description={currentProduct.description} 
        slogan={currentProduct.slogan} 
        features={currentProduct.features} 
        /> : null}
      </div>
      <div className="share-bar">
        <Share />
      </div>
    </div>
  )

}
export default Description;