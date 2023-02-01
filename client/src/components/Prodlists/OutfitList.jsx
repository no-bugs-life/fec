import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/OutfitList.css';

import Card from './Card.jsx';
import AddOutfitCard from './AddOutfitCard.jsx'
//  product will be obj from api
//  add saved property

//  action will be obj with 2 properties
//  imageref and function for action, add and delete
//  {product, action}

const OutfitList = ({product}) => {
  const [productIds, setProductsIds] = useState({
    outfits: localStorage.getItem('userOutfits') === null ? [] : localStorage.getItem('userOutfits'),
    view: []
  });
  const [page, setPage] = useState(0);

  const [modalToggle, setModalToggle] = useState(false);
  const [modalPosition, setModalPosition] = useState({x:0 , y:0});
  const [compareProductId, setCompareProductId] = useState(null)
  useEffect(
    () => {
    },
    []
  )

  return (
    <div>
      <p>My Outfit</p>
      <div className='outfit-list'>
        <div className='outfit-list-container'>
          <button >{'<'}</button>
          <div className='outfit-list-card-container'>
            {
              productIds.outfits.includes(product.id) ?
                null
                :
                <AddOutfitCard
                  setProductsIds={setProductsIds}
                  currentProductId={product.id}
                />
            }
            {
              productIds.outfits.map((cachedProductId) => {
                return(
                  <Card
                    relatedProductId={cachedProductId}
                    buttonType='heart'
                    buttonAction={() => {}}
                    currentProductId={product.id}
                    setModalPosition={setModalPosition}
                    setModalToggle={setModalToggle}
                    setCompareProductId={setCompareProductId}
                  />
                )
              })
            }
          </div>
          <button>{'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default OutfitList;