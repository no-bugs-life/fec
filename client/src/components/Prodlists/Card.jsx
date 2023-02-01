import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/Card.css';
//import rating stars

import axios from 'axios';

const Card = ({
  relatedProductId,
  buttonType,
  buttonAction,
  currentProductId,
  setModalPosition,
  setModalToggle,
  setCompareProductId
}) => {

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
        <button
          className='card-button-compare'
          onClick= {
            (e) => {
              setModalPosition({
                x: e.clientX,
                y: e.clientY
              })
              setCompareProductId(relatedProductId)
              setModalToggle(true);
            }
          }
        >
          🤷
        </button>

        <p>{product.category}</p>
        <p>{product.name}</p>
        <p>{product.default_price}</p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  )
}

export default Card;