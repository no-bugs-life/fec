import React,{useState} from 'react';

import '../../css/Prodlists/AddOutfitCard.css';

const AddOutfitCard = ({handleClick}) => {

  return(
    <div>
      <div
        className='add-outfit-card'
        onClick={
          () => {
            handleClick()
          }
        }
      >
        <div className='add-outfit-card-container'>
          <p className='add-outfit-card-text'>Add to Outfit</p>
          <p className='add-outfit-card-symbol'>+</p>
        </div>

      </div>
    </div>
  )
}

export default AddOutfitCard