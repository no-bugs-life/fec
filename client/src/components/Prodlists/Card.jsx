import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/Card.css';
//import rating hearts

import axios from 'axios';

const Card = ({
  productId,
  buttonType,
  buttonAction,
  currentProductId,
  setModalPosition,
  setModalToggle,
  setCompareProductId,
  cardAnimation
}) => {

  const [product, setProduct] = useState({});
  const [picture, setPicture] = useState('');
  const [buttonToggle, setButtonToggle] = useState(
    (buttonType === 'remove') ||
    (JSON.parse(localStorage.getItem('user')).outfits.indexOf(productId) > -1)
  );

  const heart = '❤';
  const remove = '✖';

  useEffect(
    () => {
      Promise.all(
        [
          axios.get(`api/products/${productId}`),
          axios.get(`api/products/${productId}/styles`)
        ]
      )
      .then((results) => {
        setProduct(results[0].data);
        setPicture(results[1].data.results[0].photos[0].thumbnail_url)
      })

      const toggleButtonOff = () => {
        setButtonToggle(false)
      }

      window.addEventListener(`toggle_${productId}_off`, toggleButtonOff)

      return () => {
        window.removeEventListener(`toggle_${productId}_off`, toggleButtonOff)
      }
    },
    []
  )

  return (
    <div className={`card ${cardAnimation}`}>
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
            buttonType === 'heart' ?
              heart
              :
              remove
          }
          onClick={
            ()=>{
              setButtonToggle(!buttonToggle);
              buttonAction()
            }
          }
        />

      </div>
      <div className='card-info-container'>
        <button
          className='card-button-compare'
          onClick= {
            (e) => {
              setModalPosition({
                x: e.clientX,
                y: e.clientY
              })
              setCompareProductId(productId)
              setModalToggle(true);
            }
          }
        >
          🤷
        </button>

        <div className='card-description'>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>{product.default_price}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>

      </div>
    </div>
  )
}

export default Card;