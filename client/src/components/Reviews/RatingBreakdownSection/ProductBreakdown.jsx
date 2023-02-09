import React from 'react';
import CharacteristicBar from './CharacteristicBar.jsx';

const ProductBreakdown = ({productData}) => {

  return(
    <div className='product-breakdown-container'>
      {productData.Size
      ? <>
          <label>
            <b>Size</b>
            <CharacteristicBar characteristicData={productData.Size} />
            <div className='characteristic-bar-label-style'>
              <div>Too Small</div>
              <div>Perfect</div>
              <div>Too Big</div>
            </div>
          </label>
        </>
      : null
      }
      {productData.Width
      ? <>
          <label>
            <b>Width</b>
            <CharacteristicBar characteristicData={productData.Width} />
            <div className='characteristic-bar-label-style'>
              <div>Too Narrow</div>
              <div>Perfect</div>
              <div>Too Wide</div>
            </div>
          </label>
        </>
      : null
      }
      {productData.Comfort
      ? <>
          <label>
            <b>Comfort</b>
            <CharacteristicBar characteristicData={productData.Comfort} />
            <div className='characteristic-bar-label-style'>
              <div>Uncomfortable</div>
              <div>Very Comfortable</div>
            </div>
          </label>
        </>
      : null
      }
      {productData.Quality
      ? <>
          <label>
            <b>Quality</b>
            <CharacteristicBar characteristicData={productData.Quality} />
            <div className='characteristic-bar-label-style'>
              <div>Low Quality</div>
              <div>High Quality</div>
            </div>
          </label>
        </>
      : null
      }
      {productData.Length
      ? <>
          <label>
            <b>Length</b>
            <CharacteristicBar characteristicData={productData.Length} />
            <div className='characteristic-bar-label-style'>
              <div>Too Short</div>
              <div>Perfect</div>
              <div>Too Long</div>
            </div>
          </label>
        </>
      : null
      }
      {productData.Fit
      ? <>
          <label>
            <b>Fit</b>
            <CharacteristicBar characteristicData={productData.Fit} />
            <div className='characteristic-bar-label-style'>
              <div>Too Tight</div>
              <div>Perfect</div>
              <div>Too Baggy</div>
            </div>
          </label>
        </>
      : null
      }
    </div>
  );
}

export default ProductBreakdown;