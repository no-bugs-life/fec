import React,{useState,useEffect,Children} from 'react';
import '../../css/Prodlists/RelatedList.css';
import axios from 'axios';

import Card from './Card.jsx';

// product will be obj from api
// add saved property

//  action will be obj with 2 properties
//  imageref and function for action, add and delete
//  {product, action}

//[40345,40346,40347,40348,40349,40350,40351]
const RelatedList = ({product}) => {

  const [productIds, setProductsIds] = useState({
    related: [],
    view: []
  });
  const [page, setPage] = useState(0)
  //const [view, setView ] = useState([40345,40346,40347,40348]);

  useEffect(
    () => {
      if(Object.keys(product).length){
        axios.get(`api/products/${product.id}/related`)
        .then((result) => {
          setProductsIds({
            related: [...result.data],
            view: [...result.data].splice(page*4, page*4 + 4)
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
      <p>RELATED PRODUCTS</p>
      <div className='related-list'>
        <div className='related-list-container'>
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
          <div
            className='related-list-card-container'
          >
            {
              productIds.view.map((relatedProductId) => {
                return (
                  <Card
                    key={'id_' + relatedProductId}
                    relatedProductId={relatedProductId}
                    buttonType = 'star'
                    buttonAction = {() => {}}
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
            disabled={page === Math.ceil(productIds.related.length/4)-1}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RelatedList;