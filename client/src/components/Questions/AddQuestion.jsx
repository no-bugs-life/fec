import React, {useState} from 'react';
import axios from 'axios';

const QUESTION_STYLES = {
  borderRadius: '1em',
  position: 'fixed',
  textAlign: 'left',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#CFDBD5',
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

const AddQuestion = ({showAddQuestion, onClose, productName, id}) => {
  const [questionBody, setQuestionBody] = useState('');
  const [questionNickname, setQuestionNickname] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');
  const [questionPhoto, setQuestionPhoto] = useState('');

  if (!showAddQuestion) {
    return null
  }

  const questionReview = (e) => {
    e.preventDefault();
    let postObj = {
      "body": questionBody,
      "name": questionNickname,
      "email": questionEmail,
      "product_id": id
    };
    axios.post('/api/qa/questions', postObj)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    document.body.style.overflowY = 'visible';
  }

  return (
    <div style={OVERLAY_STYLES}>
    <div className='add-question' style={QUESTION_STYLES} Click={onClose}>
      <div className='question-content' onClick={e => e.stopPropagation()}>
        <div className='question-header'>
          <h4>Add a Question</h4>
          <p><small>About the {productName}</small></p>
        </div>
        <div className='question-body'>
        <form onSubmit={questionReview}>
        <br></br>
        <label> Your Question*
        <br></br>
          <input
          type='text'
          maxLength={50}
          maxLength={1000}
          value={questionBody}
          placeholder='Question'
          required onChange={(e) => setQuestionBody(e.target.value)}/>
        <br></br>
        </label>
        <br></br>
        <label> What is your nickname*
          <br></br>
          <input
          type='text'
          maxLength={60}
          value={questionNickname}
          placeholder='Example: jack543!'
          required onChange={(e) => setQuestionNickname(e.target.value)}/>
        <p><small>For privacy reasons, do not use your full name or email address</small></p>
        </label>
        <br></br>
        <label> Your email*
        <br></br>
          <input
          type='email'
          maxLength={60}
          value={questionEmail}
          placeholder='Example: jack@email.com'
          required onChange={(e) => setQuestionEmail(e.target.value)}/>
        <p><small>For authentication reasons, you will not be emailed</small></p>
        </label>
        <input id='submit-question' type='submit' value='Submit'/>
        </form>
          <button id='close-question'onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddQuestion;