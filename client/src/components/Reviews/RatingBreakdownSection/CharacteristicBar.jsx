import React from 'react';

const CharacteristicBar = ({characteristicData}) => {
  return(
    <div className='characteristicStyle'>
      <div className='characteristicFillStyle' style={{width: `${characteristicData.value * 100 / 5}%`}}>
      </div>
    </div>
  );
}

export default CharacteristicBar;