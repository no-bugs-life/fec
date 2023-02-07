import React, {useState} from 'react';

const AddAnswer = ({showAddAnswer, onClose, productName, body}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [answerNickname, setAnswerNickname] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');
  const [answerPhoto, setAnswerPhoto] = useState([]);

  if (!showAddAnswer) {
    return null
  }

  const acceptPhoto = (e) => {
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
      let photosCopy = photos.slice();
      console.log(res);
      photosCopy.push(res.data.data.url);
      setAnswerPhotos(photosCopy);
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='add-answer' onClick={onClose}>
      <div className='answer-content' onClick={e => e.stopPropagation()}>
        <div className='answer-header'>
          <h4>Add an Answer</h4>
          <p>{productName} : {body} </p>
        </div>
        <div className='answer-body'>
        <form> Your answer*
        <br></br>
          <input
          type='text'
          minLength={50}
          maxLength={1000}
          value={answerBody}
          placeholder='Answer'
          required onChange={(e) => setAnswerBody(e.target.value)}/>
        <p>
          <p style={{color: 'red'}}> Answer is required</p>
        </p>
        </form>
        <form> What is your nickname*
        <br></br>
          <input
          type='text'
          maxLength={60}
          value={answerNickname}
          placeholder='Example: jack543!'
          required onChange={(e) => setAnswerNickname(e.target.value)}/>
        <p>For privacy reasons, do not use your full name or email address
          <p style={{color: 'red'}}> Name is required</p>
        </p>
        </form>
        <form> Your email*
        <br></br>
          <input
          type='text'
          maxLength={60}
          value={answerEmail}
          placeholder='Example: jack@email.com'
          required onChange={(e) => setAnswerEmail(e.target.value)}/>
        <p>For authentication reasons, you will not be emailed
          <p style={{color: 'red'}}> Email is required</p>
        </p>
        </form>
        <form>
        {answerPhoto.length <= 5
              ? <input
              type='file'
              id='photosInput'
              accept='.png, .jpg'
              multiple onChange={acceptPhoto}/> : null}
          <br></br>
          {answerPhoto.map((photo, idx) =>
              <img src={photo} alt={'Photo Unavailable'}  height={100} width={100} key={idx}/>
            )}
        </form>
          <button id='submit-question' value='Submit'>Submit</button>
        </div>
        <div className='answer-footer'>
        <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddAnswer;