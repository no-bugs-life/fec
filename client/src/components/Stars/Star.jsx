import React from 'react';

const Star = (props) => {

  const starStyle={
    background: 'linear-gradient(to right, #430089, #82ffa1)',
  }
  return (
    <svg height="800px" width="800px" version="1.1" id="Capa_1" viewBox="-5 0 60 53.867">
      <defs>
        <linearGradient id="myGradient" >
          <stop offset='40%' stopColor="black" />
          <stop offset='40%' stopColor="white" />
        </linearGradient>
      </defs>
      <polygon style={{fill: 'url("myGradient")', stroke: 'black', strokeWidth: 1}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
    </svg>
  )
}

export default Star;