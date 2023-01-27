import React, {useState} from 'react';

const Star = ({starFill, idx}) => {
  return (
    <svg height="100px" width="100px" viewBox="-5 0 60 53.867">
      <linearGradient id={"myGradient" + idx} >
        <stop offset={starFill} stopColor="black" />
        <stop offset={starFill} stopColor="white" />
      </linearGradient>
      <polygon style={{fill: `url("#myGradient${idx}")`, stroke: 'black', strokeWidth: 1}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
    </svg>
  )
}

export default Star;