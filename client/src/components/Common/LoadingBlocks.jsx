import React from 'react';

const LoadingBlocks = ({size}) => {
  return(
    <svg  width={size + 'px'} height={size + 'px'} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <rect fill="#6a6a6a" x="21" y="21" width="24" height="24" rx="0" ry="0">
        <animate attributeName="x" dur="2.4390243902439024s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="21;55;55;55;55;21;21;21;21" begin="-2.235772357723577s"></animate>
        <animate attributeName="y" dur="2.4390243902439024s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="21;55;55;55;55;21;21;21;21" begin="-1.6260162601626014s"></animate>
      </rect>
      <rect fill="#979797" x="21" y="21" width="24" height="24" rx="0" ry="0">
        <animate attributeName="x" dur="2.4390243902439024s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="21;55;55;55;55;21;21;21;21" begin="-1.4227642276422765s"></animate>
        <animate attributeName="y" dur="2.4390243902439024s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="21;55;55;55;55;21;21;21;21" begin="-0.8130081300813007s"></animate>
      </rect>
      <rect fill="#bdbdbd" x="21" y="21" width="24" height="24" rx="0" ry="0">
        <animate attributeName="x" dur="2.4390243902439024s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="21;55;55;55;55;21;21;21;21" begin="-0.6097560975609756s"></animate>
        <animate attributeName="y" dur="2.4390243902439024s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="21;55;55;55;55;21;21;21;21" begin="0s"></animate>
      </rect>
    </svg>
  )
}

export default LoadingBlocks