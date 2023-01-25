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
        src={'https://imgprd19.hobbylobby.com/2/fe/7f/2fe7f9b08fb17ea5bffd92cf575dee4a8d898668/1400Wx1400H-634485-0320.jpg'}
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