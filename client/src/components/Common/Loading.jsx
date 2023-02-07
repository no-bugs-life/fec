import React from 'react';

const Loading = ({size}) => {
  return(
    <svg  width={size + 'px'} height={size + 'px'} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <g transform="translate(20 50)">
      <circle cx="0" cy="0" r="6" fill="#6a6a6a">
        <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
      </circle>
      </g><g transform="translate(40 50)">
      <circle cx="0" cy="0" r="6" fill="#979797">
        <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
      </circle>
      </g><g transform="translate(60 50)">
      <circle cx="0" cy="0" r="6" fill="#bdbdbd">
        <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
      </circle>
      </g><g transform="translate(80 50)">
      <circle cx="0" cy="0" r="6" fill="#e2e2e2">
        <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
      </circle>
      </g>
    </svg>
  )
}

export default Loading