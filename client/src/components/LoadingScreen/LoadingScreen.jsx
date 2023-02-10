import React,{useEffect,useState} from "react";
import SkullFlaming from '../Common/SkullFlaming.jsx'
import '../../css/LoadingScreen/LoadingScreen.css';
const LoadingScreen = ()=> {
  const [loading,setLoading] = useState('');

  useEffect(
    () => {
      window.addEventListener('loadDone', setLoading('done'))

      return () => {
        window.removeEventListener('loadDone', setLoading('done'))
      }
    },
    []
  )

  return(
    <div className={`loading-screen ${loading}`}>
      <div className='loading-screen-content'>
        <SkullFlaming />
      </div>
    </div>
  )
}

export default LoadingScreen;