import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/OutfitList.css';

import Card from './Card.jsx';
import AddOutfitCard from './AddOutfitCard.jsx'
import ComparisonModal from './ComparisonModal.jsx';
//  product will be obj from api
//  add saved property

//  action will be obj with 2 properties
//  imageref and function for action, add and delete
//  {product, action}

const OutfitList = ({product}) => {
  const [productIds, setProductsIds] = useState({
    outfits: [],
    view: []
  });
  const [page, setPage] = useState(0);

  const [modalToggle, setModalToggle] = useState(false);
  const [modalPosition, setModalPosition] = useState({x:0 , y:0});
  const [compareProductId, setCompareProductId] = useState(null);

  const updateView = (pageTo) => {
    if(pageTo <= 0){
      pageTo = 0
    }
    setPage(pageTo);
    setProductsIds({
      related: [...productIds.related],
      view: [...productIds.related].splice(pageTo*4, pageTo*4 + 4)
    })
  }

  useEffect(
    () => {
      if(localStorage.getItem('user') === null){
        localStorage.setItem('user', '{"outfits":[]}')
      }
      setProductsIds({
        ...productIds,
        outfits: JSON.parse(localStorage.getItem('user')).outfits
      })
    },
    []
  )

  return (
    <div>
      <p>Your Outfit</p>

      {
        modalToggle ?
          <ComparisonModal
            setModalToggle={setModalToggle}
            modalPosition={modalPosition}
            compareProductId={compareProductId}
            currentProductId={product.id}
          />
          :
          null
      }

      <div className='outfit-list'>
        <div className='outfit-list-container'>
          <button
            onClick={
              ()=>{
                updateView(page - 1)
              }
            }
            disabled={page === 0}
          >
            {'<'}
          </button>
          <div className='outfit-list-card-container'>
            {
              productIds.outfits.includes(product.id) ?
                null
                :
                <AddOutfitCard
                  productIds={productIds}
                  setProductsIds={setProductsIds}
                  currentProductId={product.id}
                />
            }
            {
              productIds.outfits.map((cachedProductId) => {
                return(
                  <Card
                    key={'id_out_' + cachedProductId}
                    buttonType='heart'
                    buttonAction={
                      () => {
                        let storage = JSON.parse(localStorage.getItem('user')).outfits
                        let index = storage.indexOf(cachedProductId)

                        if(index > -1){
                          storage.splice(index, 1)
                        }
                        setProductsIds({
                          ...productIds,
                          outfits: storage
                        })
                        localStorage.setItem('user', JSON.stringify({outfits:storage}))
                      }
                    }
                    productId={cachedProductId}
                    currentProductId={product.id}
                    setModalPosition={setModalPosition}
                    setModalToggle={setModalToggle}
                    setCompareProductId={setCompareProductId}
                  />
                )
              })
            }
          </div>
          <button
            onClick={
              ()=>{
                updateView(page + 1)
              }
            }
            disabled={page === Math.ceil(productIds.outfits.length/4)-1}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutfitList;