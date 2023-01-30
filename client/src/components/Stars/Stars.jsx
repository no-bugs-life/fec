import React, {useState} from 'react';
import Star from './Star.jsx'

const Stars = ({rating}) => {

  let starArr = [];
  let starTotal = rating * 100;

  if (starTotal % 25 < 13) {
    starTotal = starTotal - (starTotal % 25);
  } else {
    starTotal = starTotal + (25 - starTotal % 25);
  }

  for (let i = 0; i < 5; i++) {
    if (starTotal >= 100) {
      starArr[i] = '100%';
      starTotal -= 100;
    } else {
      starArr[i] = starTotal + '%';
      starTotal = 0;
    }
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