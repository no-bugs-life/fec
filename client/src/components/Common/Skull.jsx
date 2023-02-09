import React, {useState,useEffect} from 'react';


const Skull = () => {
  const [mousePosition,setMousePosition] = React.useState({ x: null, y: null });

  const eyes = {
    height: '10px',
    width: '10px',
    backgroundColor: '#242423',
    borderRadius: '50%',
    display: 'inline-block'
  }


  useEffect(
    () => {
      const updateMousePosition = e => {
        setMousePosition({ x: e.clientX/(e.view.innerWidth/2), y: e.clientY/(e.view.innerHeight/2) });
      };

      window.addEventListener('mousemove', updateMousePosition);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    },
    []
  );
  return(
    <div style={{position: 'absolute'}}>
      <svg style={{transform: 'scaleX(-1)', position: 'relative'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width={`150px`} height={`150px`} viewBox="0 0 150.000000 150.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)" fill="#333533" stroke="none">
        <path d="M749 1197 c-96 -18 -225 -85 -294 -153 -143 -141 -205 -318 -205 -584 0 -120 20 -282 38 -317 25 -46 102 -53 143 -12 l20 20 10 -30 c13 -37 57 -56 131 -56 49 0 61 4 89 30 23 22 33 26 37 16 2 -7 13 -22 23 -32 51 -51 219 12 219 82 0 16 8 17 94 12 85 -5 98 -4 147 19 73 33 111 68 170 151 60 86 89 173 89 271 0 119 -32 212 -113 334 -123 185 -376 290 -598 249z m-259 -482 c79 -41 87 -175 15 -251 -75 -79 -186 -17 -185 104 1 54 33 118 72 142 40 24 59 25 98 5z m366 -4 c87 -53 82 -226 -8 -281 -47 -28 -81 -25 -123 11 -80 70 -65 212 27 269 41 25 65 25 104 1z m-236 -216 c7 -9 13 -32 14 -53 1 -37 1 -37 -39 -37 -47 0 -53 13 -30 68 16 39 35 47 55 22z"/>
        </g>
      </svg>
      <div style={{
        position: 'absolute',
        left: `${65 + ((mousePosition.x < 1 ? (-1*mousePosition.x):(mousePosition.x-1))*6)}px`,
        bottom: `${65 + (((mousePosition.y < 1 ? (-1*mousePosition.y):(mousePosition.y-1))*10))}px`
      }}>
        <span style={eyes}></span>
      </div>
      <div style={{
        position: 'absolute',
        left: `${100 + ((mousePosition.x < 1 ? (-1*mousePosition.x):(mousePosition.x-1))*6)}px`,
        bottom: `${65 + (((mousePosition.y < 1 ? (-1*mousePosition.y):(mousePosition.y-1))*10))}px`
      }}>
        <span style={eyes}></span>
      </div>
    </div>
  )
}

export default Skull