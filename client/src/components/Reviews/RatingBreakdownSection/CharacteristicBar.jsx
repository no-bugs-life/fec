import React from 'react';
import '../../../css/Reviews/breakdownStyles.css'

const CharacteristicBar = ({characteristicData}) => {
  return(
    <div className='characteristic-style'>
      <div className='characteristic-fill-style' style={{width: `${characteristicData.value * 100 / 5}%`}}>
      </div>
    </div>
  );
}

export default CharacteristicBar;