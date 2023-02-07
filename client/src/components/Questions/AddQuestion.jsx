import React, {useState} from 'react';

const AddQuestion = ({showAddQuestion, onClose, productName}) => {
  const [questionBody, setQuestionBody] = useState('');
  const [questionNickname, setQuestionNickname] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');
  const [questionPhoto, setQuestionPhoto] = useState('');

  if (!showAddQuestion) {
    return null
  }

  return (
    <div className='add-question' onClick={onClose}>
      <div className='question-content' onClick={e => e.stopPropagation()}>
        <div className='question-header'>
          <h4>Add a Question</h4>
          <p>About the {productName}</p>
        </div>
        <div className='question-body'>
        <form> Your Question*
        <br></br>
          <input
          type='text'
          maxLength={50}
          maxLength={1000}
          value={questionBody}
          placeholder='Question'
          required onChange={(e) => setQuestionBody(e.target.value)}/>
        <p>
          {<p style={{color: 'red'}}> Question is required</p>}
        </p>
        </form>
        <form> What is your nickname*
          <br></br>
          <input
          type='text'
          maxLength={60}
          value={questionNickname}
          placeholder='Example: jack543!'
          required onChange={(e) => setQuestionNickname(e.target.value)}/>
        <p>For privacy reasons, do not use your full name or email address
          {<p style={{color: 'red'}}> Name is required</p>}
        </p>
        </form>
        <form> Your email*
        <br></br>
          <input
          type='text'
          maxLength={60}
          value={questionEmail}
          placeholder='Example: jack@email.com'
          required onChange={(e) => setQuestionEmail(e.target.value)}/>
        <p>For authentication reasons, you will not be emailed
          {<p style={{color: 'red'}}> Email is required</p>}
        </p>
        </form>
        <button id='submit-question'>Submit</button>
        </div>
        <div className='question-footer'>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;