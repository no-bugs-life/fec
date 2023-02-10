import React,{useState,useEffect,Children} from 'react';
import '../../css/Prodlists/RelatedList.css';
import axios from 'axios';

import ComparisonModal from './ComparisonModal.jsx';
import Card from './Card.jsx';

const RelatedList = ({product}) => {

  const [productIds, setProductsIds] = useState({
    related: [],
    view: []
  });
  const [page, setPage] = useState(0);
  const [modalToggle, setModalToggle] = useState(false);
  const [modalPosition, setModalPosition] = useState({x:0 , y:0});
  const [compareProductId, setCompareProductId] = useState(null)
  const [cardAnimation, setCardAnimation] = useState('fadeInFromLeft')
  useEffect(
    () => {
      if(Object.keys(product).length){
        axios.get(`api/products/${product.id}/related`)
        .then((result) => {
          setProductsIds({
            related: [...new Set(result.data)],
            view: [...new Set(result.data)].splice(page*4, page*4 + 4)
          });
        })
      }
    },
    [product]
  )

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


  return (
    <div>
      <p className='related-list-title'>Related Products</p>
      <div className='related-list'>

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


        <div className='related-list-container'>
          <button
            className='related-list-container-scroll'
            onClick={
              ()=>{
                setCardAnimation('fadeInFromLeft')
                updateView(page - 1)
              }
            }
            disabled={page === 0}
          >
            <i className="related-list-arrow-left"></i>
          </button>
          <div className='related-list-card-container'>
            {
              productIds.view.map((relatedProductId) => {
                return (
                  <Card
                    key={'id_rel_' + relatedProductId}
                    currentProductId = {product.id}
                    productId = {relatedProductId}
                    buttonType = 'heart'
                    buttonAction = {
                      () => {
                        let storage = JSON.parse(localStorage.getItem('user')).outfits
                        let index = storage.indexOf(relatedProductId)
                        if(index > -1){
                          storage.splice(index, 1)
                        }else{
                          storage.unshift(relatedProductId)
                        }

                        localStorage.setItem('user', JSON.stringify({'outfits': storage}));
                        window.dispatchEvent(new Event('storage'))

                      }
                    }
                    setModalPosition = {setModalPosition}
                    setModalToggle = {setModalToggle}
                    setCompareProductId = {setCompareProductId}
                    cardAnimation = {cardAnimation}
                  />
                )
              })
            }
          </div>
          <button
            data-testid='arrow-right'
            className='related-list-container-scroll'
            onClick={
              ()=>{
                setCardAnimation('fadeInFromRight')
                updateView(page + 1)
              }
            }
            disabled={page === Math.ceil(productIds.related.length/4)-1}
          >
            <i className="related-list-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RelatedList;