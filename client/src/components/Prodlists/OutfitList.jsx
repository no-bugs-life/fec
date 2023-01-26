import React,{useState} from 'react';
import '../../css/Prodlists/OutfitList.css';

import Card from './Card.jsx';

// product will be obj from api
// add saved property

//action will be obj with 2 properties
//  imageref and function for action, add and delete
//{product, action}

const OutfitList = () => {

  //const [item, setItem] = useState({product})

  return (
    <div>
      <p>My Outfit</p>
      <div className='outfit-list'>
        <div className='outfit-list-container'>
          <button >{'<'}</button>
          <div className='outfit-list-card-container'>
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

export default OutfitList;