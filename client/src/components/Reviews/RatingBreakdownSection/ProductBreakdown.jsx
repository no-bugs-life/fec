import React from 'react';
import CharacteristicBar from './CharacteristicBar.jsx';

const ProductBreakdown = () => {
  return(
    <div>
      <h3>Product Breakdown</h3>
      <label>
        Size:
        <CharacteristicBar />
        {'Too Small      Perfect      Too Big'}
      </label>
      <br/>
      <label>
        Width:
        <CharacteristicBar />
        {'Too Narrow      Perfect      Too Wide'}
      </label>
      <br/>
      <label>
        Comfort:
        <CharacteristicBar />
        {'Uncomfortable                Very Comforable'}
      </label>
      <br/>
      <label>
        Quality:
        <CharacteristicBar />
        {'Low Quality                 High Quality'}
      </label>
      <br/>
      <label>
        Length:
        <CharacteristicBar />
        {'Too Short      Perfect      Too Long'}
      </label>
      <br/>
      <label>
        Fit:
        <CharacteristicBar />
        {'Too Tight      Perfect      Too Baggy'}
      </label>
    </div>
  );
}

export default ProductBreakdown;