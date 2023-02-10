import React, {useState, useEffect} from 'react';
import AddAnswer from './AddAnswer.jsx';
import Search from './Search.jsx';
import App from '../App.jsx';
import axios from 'axios';
import dateFormat from 'dateformat';
import AnswerComponent from './AnswerComponent.jsx';

const QuestionComponent = ({id, body, helpfulness, asker_name, date, answers, setAnswers, productName}) => {
  const [loadMore, setLoadMore] = useState(true);
  const [showAddAnswer, setShowAddAnswer] = useState(false);
  const [answerLength, setAnswerLength] = useState(2);
  const [showQuestionHelpful, setShowQuestionHelpful] = useState(true);
  const [showQuestionReport, setShowQuestionReport] = useState(true);

  const handleQuestionHelpful = (e) => {
    e.preventDefault();
    axios.put(`/api/qa/questions/${id}/helpful`)
    .then(res => null)
    .catch(err => console.log(err));
  };

  const handleQuestionReport = (e) => {
    e.preventDefault();
    axios.put(`/api/qa/questions/${id}/report`)
    .then(res => null)
    .catch(err => console.log(err));
  };

  return (
    <div className="question">
      <div className="question-details">
        <h2 className="question-title">Q: {body}</h2>
        <div className="question-helpful-report">
          {
            showQuestionHelpful ?
              <small>
                {`Helpful Rating: ${helpfulness} `}
                <button
                  id="questionHelpful"
                  onClick ={
                    (e) => {
                      handleQuestionHelpful(e);
                      setShowQuestionHelpful(false)
                    }
                  }
                >
                  Helpful?
                </button>
              </small>
              :
              <small>{`Helpful Rating: ${helpfulness + 1} `}</small>
          }
          {
            showQuestionReport ?
              <small> <button
                  id="questionReport"
                  onClick ={
                    (e) => {
                      handleQuestionReport(e);
                      setShowQuestionReport(false)
                    }
                  }
                >
                  Report
                </button>
              </small>
              :
              <small> <button id="questionReport">
                  Reported
                </button>
              </small>
          }
        </div>
      </div>
      <small className='asker-name-date'>by {asker_name}, {dateFormat(`${date}`, "mmmm dS, yyyy")}</small>
        <div className='answers-container'>
        {(answers.length > 0) ?
        answers.slice(0, answerLength).map((oneAnswer, index) => (
            <AnswerComponent key={index}
            id={oneAnswer.answer_id}
            body={oneAnswer.body}
            answerer_name={oneAnswer.answerer_name}
            helpfulness={oneAnswer.helpfulness}
            date={oneAnswer.date}
            answerLength={answerLength}
            setAnswerLength={setAnswerLength}
            answers = {answers}
            setAnswers = {setAnswers}/>))
            : <h4 className='not-answered'><br></br>Not Answered Yet!</h4>
          }
          </div>
        {loadMore ? <small><button id="load-more-answers" onClick={() => {setLoadMore(false); setAnswerLength(answers.length)}}>Load More Answers </button> </small> : null}
        <small><button id="add-answer" onClick={() => setShowAddAnswer(true)}>Add an Answer</button>
        <AddAnswer onClose={() => setShowAddAnswer(false)} showAddAnswer={showAddAnswer} productName={productName} body={body} id={id}/></small>
        <br></br>
    </div>
)};

export default QuestionComponent;