import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/OutfitList.css';

import Card from './Card.jsx';
import AddOutfitCard from './AddOutfitCard.jsx'
import ComparisonModal from './ComparisonModal.jsx';

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
      outfits: [...productIds.outfits],
      view: [...productIds.outfits].splice(pageTo*4, pageTo*4 + 4)
    })
  }

  useEffect(
    () => {
      if(localStorage.getItem('user') === null){
        localStorage.setItem('user', '{"outfits":[]}')
      }

      const updateProductIds = () => {
        setProductsIds({
          outfits: JSON.parse(localStorage.getItem('user')).outfits,
          view: JSON.parse(localStorage.getItem('user')).outfits.splice(page*4, page*4 + 4)
        })
      }

      updateProductIds();

      window.addEventListener('storage', updateProductIds)

      return () => {
        window.removeEventListener('storage', updateProductIds)
      }

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
              productIds.outfits.indexOf(product.id) > -1 ?
                null
                :
                <AddOutfitCard
                  handleClick={
                    ()=>{
                      let storage = JSON.parse(localStorage.getItem('user')).outfits
                      if(storage.indexOf(product.id) === -1){
                        storage.unshift(product.id)
                        console.log('adding to outfit')
                        localStorage.setItem('user', JSON.stringify({'outfits': storage}));
                        window.dispatchEvent(new Event('storage'))
                      }
                    }
                  }
                />
            }
            {
              productIds.view.map((cachedProductId) => {
                return(
                  <Card
                    key={'id_out_' + cachedProductId}
                    buttonType='remove'
                    buttonAction={
                      () => {
                        let storage = JSON.parse(localStorage.getItem('user')).outfits
                        let index = storage.indexOf(cachedProductId)
                        console.log(storage,index)

                        if(index > -1){
                          storage.splice(index, 1)
                        }

                        localStorage.setItem('user', JSON.stringify({outfits:storage}))
                        window.dispatchEvent(new Event('storage'))
                        window.dispatchEvent(new Event(`toggle_${cachedProductId}_off`))
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
            disabled={page >= Math.ceil(productIds.outfits.length/4)-1}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutfitList;