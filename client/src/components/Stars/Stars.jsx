import React, {useState} from 'react';
import Star from './Star.jsx'

const Stars = () => {

  let starArr = ['50%', '30%', '40%', '60%', '80%'];
  let starTotal = 336;

  for (let i = 0; i < 5; i++) {

  }

  return (
    <div>
      {starArr.map((starVal, idx) =>
        <Star starFill={starVal} key={idx} idx={idx} />
      )}
    </div>
  );
}

export default Stars;