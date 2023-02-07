import React, {useState} from 'react';
import Star from './Star.jsx'

const Stars = ({rating, tag, size, setNewRating, colorVal}) => {

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

  const sendRating = (index) => {
    setNewRating ? setNewRating(parseInt(index) + 1) : null;
  }

  return (
    <>
      {starArr.map((starVal, idx) =>
        <Star
          key={idx}
          starFill={starVal}
          idx={tag + ' StarIndex: ' + idx}
          size={size}
          sendRating={sendRating}
          colorVal={colorVal}
        />
      )}
    </>
  );
}

export default Stars;