import React, {useState} from 'react';
import '../../css/Reviews/styles.css'

const Image = ({url}) => {

  const [fullRes, setFullRes] = useState(false);

  return (
  <>
    {fullRes
    ?
    <>
      <img className='modalPhoto' src={url} alt='image not available' onClick={() => setFullRes(!fullRes)}/>
    </>
    : <img src={url} alt='image not available' height={150} width={150} onClick={() => setFullRes(!fullRes)}/>
    }
  </>
  );
}

export default Image;