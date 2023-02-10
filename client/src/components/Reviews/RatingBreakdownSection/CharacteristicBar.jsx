import React from 'react';
import '../../../css/Reviews/breakdownStyles.css'

const CharacteristicBar = ({characteristicData}) => {
  return(
    <div className='characteristic-style'>
      <p className='characteristic-fill-style' style={{position:'relative', marginLeft: `${characteristicData.value * 100 / 5}%`}}>▼</p>
    </div>
  );
}

export default CharacteristicBar;