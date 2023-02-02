import React,{useState} from 'react';

import '../../css/Prodlists/AddOutfitCard.css';

const AddOutfitCard = ({productIds, setProductsIds, currentProductId}) => {



  return(
    <div>
      <div
        className='add-outfit-card'
        onClick={
          () => {
            console.log('adding outfit')
            let storage = JSON.parse(localStorage.getItem('user')).outfits
            console.log('storage',storage)

            if(storage.indexOf(currentProductId) === -1){
              storage.unshift(currentProductId)
              localStorage.setItem('user', JSON.stringify({'outfits': storage}));
              setProductsIds({
                ...productIds,
                outfits: storage
              })
            }

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