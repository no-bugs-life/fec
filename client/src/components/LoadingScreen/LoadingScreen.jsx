import React,{useEffect,useState} from "react";
import SkullFlaming from '../Common/SkullFlaming.jsx'
import '../../css/LoadingScreen/LoadingScreen.css';
const LoadingScreen = ()=> {


  return(
    <div className='loading-screen'>
      <div className='loading-screen-content'>
        <SkullFlaming />
      </div>
    </div>
  )
}

export default LoadingScreen;