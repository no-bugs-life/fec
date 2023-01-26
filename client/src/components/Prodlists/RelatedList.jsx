import React,{useState} from 'react';
import '../../css/Prodlists/RelatedList.css';

import Card from './Card.jsx';

// product will be obj from api
// add saved property

//action will be obj with 2 properties
//  imageref and function for action, add and delete
//{product, action}

const RelatedList = () => {

  //const [item, setItem] = useState({product})

  return (
    <div>
      <p>RELATED PRODUCTS</p>
      <div className='related-list'>
        <div className='related-list-container'>
          <button >{'<'}</button>
          <div className='related-list-card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button>{'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default RelatedList;