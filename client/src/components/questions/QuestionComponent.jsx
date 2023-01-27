import React, {useState} from 'react';
import AddAnswer from './AddAnswer.jsx';
import LoadMoreQuestions from './LoadMoreQuestions.jsx'

const QuestionComponent = () => {
  const [search, setSearch] = useState('');

  return (
      <div className='question'>
      <h1>Q: {question.results.question_body}</h1>
      <small>by {question.results.asker_name}, {question.results.question_date} | Helpful? <Button id ='helpful'>Yes</Button> | <Button id='report'>Report</Button> <AddAnswer> </AddAnswer></small>
      <h2>A: </h2> <div>{question.results.answers.id.body}</div>
      <small>by {question.results.answers.id.answerers_name}, {question.results.answers.id.date} | Helpful? <Button id ='helpful'>Yes</Button> | <Button id='report'>Report</Button></small>
      </div>
  );
};

export default QuestionComponent;