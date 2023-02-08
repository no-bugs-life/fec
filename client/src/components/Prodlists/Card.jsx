import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/Card.css';
import Stars from '../Stars/Stars.jsx';
//import rating hearts
import Loading from '../Common/Loading.jsx';
import LoadingBars from '../Common/LoadingBars.jsx'
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
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const heart = '❤';
  const remove = '✖';

  useEffect(
    () => {
      Promise.all(
        [
          axios.get(`api/products/${productId}`),
          axios.get(`api/products/${productId}/styles`),
          axios.get('api/reviews/meta', {params: {"product_id": productId}})
        ]
      )
      .then((results) => {
        //console.log(results)
        setProduct(results[0].data);
        setPicture(results[1].data.results[0].photos[0].thumbnail_url);

        const ratingSum = Object.entries(results[2].data.ratings)
          .reduce((acc,pair) => {
            return acc + (parseInt(pair[0])*parseInt(pair[1]))
          },0)
        const ratingTotal = Object.entries(results[2].data.ratings)
          .reduce((acc,pair) => {
            return acc + parseInt(pair[1])
          } ,0)
        setRatingCount(ratingTotal)
        setRating(ratingSum/ratingTotal)
      })

      const toggleButtonOff = () => {
        setButtonToggle(false)
      }

      const toggleButtonOn = () => {
        setButtonToggle(true)
      }

      window.addEventListener(`toggle_${productId}_off`, toggleButtonOff)
      window.addEventListener(`toggle_${productId}_on`, toggleButtonOn)

      return () => {
        window.removeEventListener(`toggle_${productId}_off`, toggleButtonOff)
        window.removeEventListener(`toggle_${productId}_on`, toggleButtonOn)
      }
    },
    []
  )


  return (
    <div data-testid={productId} className={`card ${cardAnimation}`}>
      <div className='card-image-container'>
        {
          picture !== '' ?
          <>
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
          </>
          :
          <Loading size={200}/>
        }
      </div>


      <div className='card-info-container'>
        {
          Object.keys(product).length > 0?
          <>

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

            <div className='card-description-container'>
              <p className='card-description-category'>{String(product.category).toUpperCase()}</p>
              <p className='card-description-name'>{product.name}</p>
              <p className='card-description-price'>{`$${product.default_price}`}</p>
              <div className='card-rating-container'>

                <div className='card-rating-content'>
                  <Stars
                    className='card-rating-stars'
                    rating={rating}
                    tag={productId}
                    size={'15px'}
                    colorVal={'209, 198, 42'}
                  />
                  <p className='card-rating-stats'>
                    <span className='card-rating-stats-num'>{rating.toFixed(1)}</span>
                    {' | '}
                    <span className='card-rating-stats-count'>{`${ratingCount} Ratings`}</span>
                  </p>
                </div >
              </div>
            </div>
          </>
          :
          <LoadingBars size={100} />
        }

      </div>
    </div>
  )
}

export default Card;