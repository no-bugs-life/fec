import React, {useState} from 'react';
import AddAnswer from './AddAnswer.jsx';
import LoadMoreQuestions from './LoadMoreQuestions.jsx'

const QuestionComponent = ({questions}) => {

  return (
      <div className='question'>
        <h2>Q: Question?
        {/* {questions.filter((question) => {
          if (search === '') {
            return question
          } else if (question.title.toLowerCase().includes(search.toLowerCase())) {
            return question
          }
        }).map((question, index) => (
          <QuestionComponent question={question}
          key={index}
          index={index}
          />
          )
          )} */}
          </h2>
      <small>by Tkoo, Today | Helpful? <button id ='helpful'>Yes</button> | <button id='report'>Report</button>
      {/* <AddAnswer> </AddAnswer> */}
      </small>
      <h2>A: Answer!</h2>
      <small>by Tkoo, Yesterday | Helpful? <button id ='helpful'>Yes</button> | <button id='report'>Report</button></small>
      {/* <h1>Q: {question.results.question_body}</h1>
      <small>by {question.results.asker_name}, {question.results.question_date} | Helpful? <Button id ='helpful'>Yes</Button> | <Button id='report'>Report</Button> <AddAnswer> </AddAnswer></small>
      <h2>A: </h2> <div>{question.results.answers.id.body}</div>
      <small>by {question.results.answers.id.answerers_name}, {question.results.answers.id.date} | Helpful? <Button id ='helpful'>Yes</Button> | <Button id='report'>Report</Button></small> */}
      </div>
  );
};

export default QuestionComponent;