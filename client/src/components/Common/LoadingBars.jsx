import React from 'react';

const Loading = ({size}) => {
  return(
    <svg style={{transform: 'rotate(90deg)'}} width={size + 'px'} height={size + 'px'} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <g transform="rotate(180 50 50)"><rect x="16" y="15" width="8" height="40" fill="#e2e2e2">
      <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="2.4390243902439024s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.975609756097561s"></animate>
      </rect><rect x="36" y="15" width="8" height="40" fill="#bdbdbd">
      <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="2.4390243902439024s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.4878048780487805s"></animate>
      </rect><rect x="56" y="15" width="8" height="40" fill="#979797">
      <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="2.4390243902439024s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-1.4634146341463412s"></animate>
      </rect><rect x="76" y="15" width="8" height="40" fill="#6a6a6a">
      <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="2.4390243902439024s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-2.4390243902439024s"></animate>
      </rect></g>
    </svg>
  )
}

export default Loading