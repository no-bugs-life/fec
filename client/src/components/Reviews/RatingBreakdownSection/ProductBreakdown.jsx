import React from 'react';
import CharacteristicBar from './CharacteristicBar.jsx';

const ProductBreakdown = ({productData}) => {

  return(
    <div>
      <h3>Product Breakdown</h3>
      {productData.Size
      ? <>
          <label>
            Size:
            <CharacteristicBar characteristicData={productData.Size} />
            <div className='characteristic-bar-label-style'>
              <div>Too Small</div>
              <div>Perfect</div>
              <div>Too Big</div>
            </div>
          </label>
          <br/>
        </>
      : null
      }
      {productData.Width
      ? <>
          <label>
            Width:
            <CharacteristicBar characteristicData={productData.Width} />
            <div className='characteristic-bar-label-style'>
              <div>Too Narrow</div>
              <div>Perfect</div>
              <div>Too Wide</div>
            </div>
          </label>
          <br/>
        </>
      : null
      }
      {productData.Comfort
      ? <>
          <label>
            Comfort:
            <CharacteristicBar characteristicData={productData.Comfort} />
            <div className='characteristic-bar-label-style'>
              <div>Uncomfortable</div>
              <div>Very Comfortable</div>
            </div>
          </label>
          <br/>
        </>
      : null
      }
      {productData.Quality
      ? <>
          <label>
            Quality:
            <CharacteristicBar characteristicData={productData.Quality} />
            <div className='characteristic-bar-label-style'>
              <div>Low Quality</div>
              <div>High Quality</div>
            </div>
          </label>
          <br/>
        </>
      : null
      }
      {productData.Length
      ? <>
          <label>
            Length:
            <CharacteristicBar characteristicData={productData.Length} />
            <div className='characteristic-bar-label-style'>
              <div>Too Short</div>
              <div>Perfect</div>
              <div>Too Long</div>
            </div>
          </label>
          <br/>
        </>
      : null
      }
      {productData.Fit
      ? <>
          <label>
            Fit:
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