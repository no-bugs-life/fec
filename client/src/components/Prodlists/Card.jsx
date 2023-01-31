import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/Card.css';
//import rating stars


// product will be obj from api
// add saved property

//action will be obj with 2 properties
//  imageref and function for action, add and delete
//{product, action}
import axios from 'axios';

const Card = ({relatedProductId, buttonType, buttonAction}) => {

  const [product, setProduct] = useState({});
  const [picture, setPicture] = useState('');
  const [buttonToggle, setButtonToggle] = useState(buttonType === 'heart');
  const starOn = '★';
  const starOff = '✰';
  const heartOn = '❤';

  useEffect(
    () => {
      Promise.all(
        [
          axios.get(`api/products/${relatedProductId}`),
          axios.get(`api/products/${relatedProductId}/styles`)
        ]
      )
      .then((results) => {
        setProduct(results[0].data);
        setPicture(results[1].data.results[0].photos[0].thumbnail_url)
      })
    },
    [relatedProductId]
  )
//✰★
  return (
    <div className='card'>
      <div className='card-image-container'>
        <img
          className='card-image'
          src={picture}
        />
        <input
          type='button'
          className={
            buttonToggle ?
              `card-image-button ${buttonType}-on`
              :
              `card-image-button ${buttonType}-off`
          }
          value={
            buttonType === 'star' ?
              (buttonToggle ? starOn:starOff)
              :
              heartOn
          }
          onClick={
            ()=>{
              setButtonToggle(!buttonToggle);
              buttonAction()
            }
          }
        />
      </div>

      <div className='card-container'>
        <p>{product.category}</p>
        <p>{product.name}</p>
        <p>{product.default_price}</p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  )
}

export default Card;

/*
  Specs
    Category
    Name
    Price
      default style pricing
      if sale,
        strikethrough regular pricing
        red sale pricing
    Star rating
      average based on review points
 */