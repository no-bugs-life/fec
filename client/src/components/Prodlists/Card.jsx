import React,{useState} from 'react';
import '../../css/Prodlists/Card.css';
//import rating stars


// product will be obj from api
// add saved property

//action will be obj with 2 properties
//  imageref and function for action, add and delete
//{product, action}
const Card = () => {

  //const [item, setItem] = useState({product})

  return (
    <div className='card'>
      <img
        className='card-image'
        src={'https://webvision.med.utah.edu/wp-content/uploads/2012/06/50-percent-gray.jpg'}
      />
      <div className='card-container'>
        <p>Category Shirt</p>
        <p>Shirt for People</p>
        <p>100.00</p>
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