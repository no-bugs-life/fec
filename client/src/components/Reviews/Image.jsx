import React, {useState} from 'react';
import ReactDom from 'react-dom';
import '../../css/Reviews/modalStyles.css';

const Image = ({url}) => {

  const [fullRes, setFullRes] = useState(false);

  const openFullRes = () => {
    setFullRes(true);
    document.body.style.overflowY = 'hidden';
  }

  const closeFullRes = () => {
    setFullRes(false);
    document.body.style.overflowY = 'visible';
  }

  if (fullRes) {
    return ReactDom.createPortal(
      <>
        <div className='modalPhotoBackground'/>
        <img className='modalPhoto' src={url} alt='image not available' onClick={closeFullRes}/>
      </>,
      document.getElementById('portal')
    )
  } else {
    return (
      <img src={url} alt='image not available' className='regPhoto' onClick={openFullRes}/>
    )
  }
}

export default Image;