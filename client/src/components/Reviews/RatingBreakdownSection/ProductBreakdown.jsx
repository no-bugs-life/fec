import React from 'react';
import CharacteristicBar from './CharacteristicBar.jsx';

const ProductBreakdown = ({productData}) => {

  console.log(productData);

  return(
    <div>
      <h3>Product Breakdown</h3>
      {productData.Size
      ? <>
          <label>
            Size:
            <CharacteristicBar characteristicData={productData.Size} />
            {'Too Small      Perfect      Too Big'}
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
            {'Too Narrow      Perfect      Too Wide'}
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
            {'Uncomfortable                Very Comforable'}
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
            {'Low Quality                 High Quality'}
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
            {'Too Short      Perfect      Too Long'}
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
            {'Too Tight      Perfect      Too Baggy'}
          </label>
        </>
      : null
      }
    </div>
  );
}

export default ProductBreakdown;