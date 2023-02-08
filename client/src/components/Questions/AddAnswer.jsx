import React, {useState} from 'react';
import axios from 'axios';

const ANSWER_STYLES = {
  borderRadius: '1em',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#929292',
  padding:'50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const AddAnswer = ({showAddAnswer, onClose, productName, body, id}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [answerNickname, setAnswerNickname] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');
  const [answerPhotos, setAnswerPhotos] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  if (!showAddAnswer) {
    return null
  }
  const answerReview = (e) => {
    console.log(answerPhotos)
    e.preventDefault();
    let postObj = {
      "body": answerBody,
      "name": answerNickname,
      "email": answerEmail,
      "photos": answerPhotos
    };
    axios.post(`http://localhost:3000/api/qa/questions/${id}/answers`, postObj)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    document.body.style.overflowY = 'visible';
  }

  const acceptPhotos = (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById('photosInput').files[0];
    getBase64(selectedFile);
  }

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      sendToApi(reader.result.replace('data:', '')
      .replace(/^.+,/, ''));
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const sendToApi = (base64Img) => {
    let form = new FormData();
    form.append("image", base64Img);
    axios.post('https://api.imgbb.com/1/upload?key=dd9bb00ace03cceb9b4d7d8f33bb5c8c', form)
    .then((res) => {
      let photosCopy = answerPhotos.slice();
      console.log(res);
      photosCopy.push(res.data.data.url);
      setAnswerPhotos(photosCopy);
    })
    .catch((err) => console.log(err))
  }

  return (
    <div style={OVERLAY_STYLES}>
    <div className='add-answer' style={ANSWER_STYLES} onClick={onClose}>
      <div className='answer-content' onClick={e => e.stopPropagation()}>
        <div className='answer-header'>
          <h4>Add an Answer</h4>
          <p><small>{productName} : {body}</small></p>
          <br></br>
        </div>
        <div className='answer-body'>
          <form onSubmit={answerReview}>
        <label> Your answer*
        <br></br>
          <input
          type='text'
          maxLength={1000}
          value={answerBody}
          placeholder='Answer'
          required onChange={(e) => setAnswerBody(e.target.value)}/>
        </label>
        <br></br>
        <br></br>
        <label> What is your nickname*
        <br></br>
          <input
          type='text'
          maxLength={60}
          value={answerNickname}
          placeholder='Example: jack543!'
          required onChange={(e) => setAnswerNickname(e.target.value)}/>
        <p><small>For privacy reasons, do not use your full name or email address</small></p>
        </label>
        <br></br>
        <label> Your email*
        <br></br>
          <input
          type='email'
          maxLength={60}
          value={answerEmail}
          placeholder='Example: jack@email.com'
          required onChange={(e) => setAnswerEmail(e.target.value)}/>
        <p><small>For authentication reasons, you will not be emailed</small></p>
        </label>
        <br></br>
        <label>
        {answerPhotos.length <= 5
              ? <input
              type='file'
              id='photosInput'
              accept='.png, .jpg'
              multiple onChange={acceptPhotos}/> : null}
          <br></br>
          {answerPhotos.map((photo, idx) =>
              <img src={photo} alt={'Photo Unavailable'}  height={100} width={100} key={idx}/>
            )}
        </label>
          <input id='submit-answer' type='submit' value='Submit'/>
          </form>
        <button id='close-answer' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddAnswer;