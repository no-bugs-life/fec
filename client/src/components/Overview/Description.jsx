import React, {useState, useEffect} from "react";

import Price from "./Price.jsx";
import Images from "./Images.jsx";
import Styles from "./Styles.jsx"
import Size from "./Size.jsx";
import Quantity from "./Quantity.jsx";
import AddDescription from "./AddDescription.jsx";
import Share from "./Share.jsx";
import RatingSummary from "../Reviews/RatingBreakdownSection/RatingSummary.jsx";
import Checkout from "./Checkout.jsx"
import axios from "axios";


const Description = ({product}) => {
  const [isLoading, setIsLoading] = useState(true);
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
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);
  const [userSelection, setUserSelection] = useState({quantity: 1});
  const [currentList, setCurrentList] = useState([]);
  const [checkoutUpdate, setCheckoutUpdate] = useState(false);
  const [isQuantitySelected, setIsQuantitySelected] = useState(false);

  const onClick = (e) => {
    if (e.target.tagName === "IMG" ) {
      Array.from(e.currentTarget.parentElement.children).forEach(child => {child.children[0].removeAttribute("id")});
      e.target.setAttribute('id', 'toggle-on');
      const selectedStyle = e.currentTarget.getAttribute("id") || 0;
      setCurrentPhotos(currentStyle[selectedStyle].photos);
      setCurrentName(currentStyle[selectedStyle].name);
      setCurrentPick(currentStyle[selectedStyle]);
      setCurrentInventory(currentStyle[selectedStyle].skus);
      setCurrentSize(Object.keys(currentStyle[selectedStyle].skus)[0]);
      setDefaultPhoto(currentStyle[selectedStyle].photos[0]);
      setUserSelection({...userSelection, style: currentStyle[selectedStyle].name});
      setCurrentList(currentStyle[selectedStyle].photos.slice(0, 4));
    }
  }

  const onSizeClick = (e)=> {
    if (e.target.tagName === "INPUT" && e.target.id === "onesize") {
      setIsSizeSelected(true);
      setCheckoutUpdate(false);
      setUserSelection({...userSelection, size: null})
    } else if (e.target.tagName === "INPUT" && e.target.value === userSelection.size) {
      setCurrentSize(Object.keys(currentInventory)[e.currentTarget.id]);
      Array.from(e.currentTarget.parentElement.children).forEach(child => child.children[0].removeAttribute("id"));
      e.target.setAttribute('id', 'toggle-on-size');
      setIsSizeSelected(true)
      isQuantitySelected && setCheckoutUpdate(true);
      setUserSelection({...userSelection, size: currentInventory[Object.keys(currentInventory)[e.currentTarget.id]].size})

    }else if (e.target.tagName === "INPUT") {
      setCurrentSize(Object.keys(currentInventory)[e.currentTarget.id]);
      Array.from(e.currentTarget.parentElement.children).forEach(child => child.children[0].removeAttribute("id"));
      e.target.setAttribute('id', 'toggle-on-size');
      setIsSizeSelected(true);
      setCheckoutUpdate(false);

      setUserSelection({...userSelection, size: currentInventory[Object.keys(currentInventory)[e.currentTarget.id]].size})
    }
  }

  const onQuantityClick = (e)=>{
    if (e.target.value !== "default" && e.target.value === userSelection.quantity) {
      setIsQuantitySelected(true);
    }
    else if (e.target.value !== "default" && e.target.value) {
      setIsQuantitySelected(true);
      setCheckoutUpdate(false);
      setUserSelection({...userSelection, quantity: parseInt(e.target.value)})
    } else if (e.target.value === "default") {
      setCheckoutUpdate(false);
      setIsQuantitySelected(false);
    }

  }

  const onCheckoutClick = (e)=> {
    setIsCheckoutClicked(true);
    if (isSizeSelected && isQuantitySelected) {
      setCheckoutUpdate(true);
      e.target.setAttribute("id" , "checkout-click")
    }
    setUserSelection({...userSelection, name: currentProduct.name, price: currentPick.sale_price || currentPick.original_price, product: currentProduct});
  }

  useEffect(() => {
    Promise.all([ axios.get(`api/products/${product.id}`),  axios.get(`api/products/${product.id}/styles`), axios.get('api/reviews/meta', {params: {"product_id": product.id}})])
    .then((results) => {
      setIsLoading(!isLoading);
      setCurrentProduct(results[0].data);
      console.log(results[0].data)
      setCurrentStyle(results[1].data.results);
      setCurrentPick(results[1].data.results[0]);
      setCurrentPhotos(results[1].data.results[0].photos);
      setDefaultPhoto(results[1].data.results[0].photos[0]);
      setCurrentName(results[1].data.results[0].name);
      setCurrentInventory(results[1].data.results[0].skus);
      setCurrentSize(Object.keys(results[1].data.results[0].skus)[0]);
      setRatingData(results[2].data);
      setUserSelection({...userSelection, style: results[1].data.results[0].name, name: results[0].data.name, price: results[1].data.results[0].sale_price || results[1].data.results[0].original_price, product: results[0].data});
      setCurrentList(results[1].data.results[0].photos.slice(0, 4));

    })
    .catch(err => {console.log(err)})
    },[])


  return (
    isLoading ? <>
    Loading
    </>
    :
    <div className="overview">
    <div className = "description">
      <div className = "description-category" >
        <p data-testid="category">Category/{currentProduct.category}</p>
      </div>
      <div className = "description-img">
        {currentPhotos.length > 0 ? <Images photos = {currentPhotos} defaultPhoto={defaultPhoto} setDefaultPhoto={setDefaultPhoto} currentList={currentList} setCurrentList={setCurrentList}
        /> : null}
      </div>
      <div className="item-description">
        <div className="item-description-heading">
          <h2 className="title">{currentProduct.name}</h2>
        <div className="price">
         {currentPick ? <Price currentPick={currentPick}/> : null}
        </div>
        <div className="item-description-ratings">
         {Object.keys(ratingData).length > 0 && <RatingSummary summaryData={ratingData.ratings} isHead={isHead}/>}
        </div>
        <span className="line-break"></span>
        </div>
        <div className="item-description-styles">
          <p className="style-title">Style: <span className="style-title-current">{currentName && currentName}</span></p>
          {currentStyle ? <Styles currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} setCurrentPhotos={setCurrentPhotos} onClick={onClick}/> : null}
        </div>
        <div className="item-description-size">
          <span className="item-description-size-title">Size:</span>
          {Object.keys(currentInventory).length > 0 ? <Size currentInventory = {currentInventory} onSizeClick={onSizeClick}/> : null}
          {isCheckoutClicked && !isSizeSelected && <p className="size-alert">Please select size</p>}
        </div>
        <div className="item-description-quantity" data-testid="quantity">
          {currentSize.length > 0 && Object.keys(currentInventory).length > 0 ? <Quantity currentSize={currentSize} currentInventory={currentInventory} onQuantityClick={onQuantityClick}/> : null}
          {!isQuantitySelected && isCheckoutClicked && <p className="size-alert">Please select quantity</p>}
        </div>
        <div className="item-description-checkout">
          {<Checkout checkoutUpdate={checkoutUpdate} onCheckoutClick={onCheckoutClick} userSelection={userSelection}/>}
        </div>
        <div className="additional-info">
      <div className="share-bar-overview">
          <Share/>
      </div>
      <span className="line-break"></span>
      <div className="add-description-overview">
          {Object.keys(currentProduct).length > 0 ? <AddDescription description={currentProduct.description}
          slogan={currentProduct.slogan}
          features={currentProduct.features}
          /> : null}
      </div>
    </div>
      </div>
    </div>
    <br></br>

    </div>
  )

}
export default Description;
