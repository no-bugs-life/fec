import React,{useState,useEffect} from 'react';
import '../../css/Prodlists/ComparisonModal.css';

import axios from 'axios';

const ComparisonModal = ({
  setModalToggle,
  compareProductId,
  currentProductId,
  modalPosition
}) => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [comparisonProduct, setComparisonProduct] = useState({});
  const [featureComparisons, setFeatureComparisons] = useState({})


  useEffect(
    () => {
      Promise.all(
        [
          axios.get(`/api/products/${currentProductId}`),
          axios.get(`/api/products/${compareProductId}`)
        ]
      )
        .then((results) => {
          setCurrentProduct(results[0].data)
          setComparisonProduct(results[1].data)
          let comparisonObj = {};

          results[0].data.features.forEach((characteristic) => {
            comparisonObj[characteristic.feature] = {
              currentValue : characteristic.value,
              comparisonValue : ''
            }
          })

          results[1].data.features.forEach((characteristic) => {
            if(comparisonObj[characteristic.feature]){
              comparisonObj[characteristic.feature].comparisonValue = characteristic.value
            }else{
              comparisonObj[characteristic.feature] = {
                currentValue : '',
                comparisonValue : characteristic.value
              }
            }
          })
          setFeatureComparisons(comparisonObj)
        })
    },
    []
  )

  return (
    <div
      className='comparison-modal'
      style={{ left: modalPosition.x - 10, top: modalPosition.y - 10}}
      onMouseLeave={
        ()=>{
          setModalToggle(false)
        }
      }
    >
      <div className='comparison-modal-content'>

        <div className='comparison-modal-header'>
          <div className='comparison-modal-title'>
            Comparing
          </div>
          <button
            className='comparison-modal-exit'
            onClick={
              ()=>{
                setModalToggle(false)
              }
            }
          >
            ❌
          </button>
        </div>

        <div className='comparison-modal-body'>
            <table className='comparison-table'>
              <thead className='comparison-table-header'>
                <tr>
                  <th className='comparison-table-header-current'>{currentProduct.name}</th>
                  <th></th>
                  <th className='comparison-table-header-compare'>{comparisonProduct.name}</th>
                </tr>
              </thead>
              <tbody className='comparison-table-body'>
                {
                  Object.keys(featureComparisons).map((feature) => {
                    return (
                      <tr key={'featureComparison_' + feature}>
                        <td className='comparison-table-header-current'>{featureComparisons[feature].currentValue}</td>
                        <td className='comparison-table-header-feature'>{feature}</td>
                        <td className='comparison-table-header-compare'>{featureComparisons[feature].comparisonValue}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
        </div>

      </div>
    </div>
  )
}

export default ComparisonModal;