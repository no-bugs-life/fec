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
    const inc = productIds.outfits.indexOf(product.id) > -1 ? 4: 3;
    console.log(page)
    setPage(pageTo);
    setProductsIds({
      outfits: [...productIds.outfits],
      view: [...productIds.outfits].splice(pageTo*inc, pageTo*inc + inc)
    })
  }

  useEffect(
    () => {
      if(localStorage.getItem('user') === null){
        localStorage.setItem('user', '{"outfits":[]}')
      }

      const updateProductIds = () => {
        console.log(page)
        const inc = JSON.parse(localStorage.getItem('user')).outfits.indexOf(product.id) > -1 ? 4: 3
        setProductsIds({
          outfits: JSON.parse(localStorage.getItem('user')).outfits,
          view: JSON.parse(localStorage.getItem('user')).outfits.splice(page*inc, page*inc + inc)
        })
      }

      updateProductIds();

      window.addEventListener('storage', updateProductIds)

      return () => {
        window.removeEventListener('storage', updateProductIds)
      }

    },
    [product]
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
            className='outfit-list-container-scroll'
            onClick={
              ()=>{
                updateView(page - 1)
              }
            }
            disabled={page === 0}
          >
            <i class="arrow left"></i>
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
                        //console.log('adding to outfit')
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
            className='outfit-list-container-scroll'
            onClick={
              ()=>{
                updateView(page + 1);
              }
            }
            disabled={productIds.view.includes(productIds.outfits[productIds.outfits.length-1]) || productIds.view.length === 0}
          >
            <i class="arrow right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutfitList;