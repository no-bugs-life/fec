import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import App from '../App.jsx';
import axios from 'axios';
import dateFormat from 'dateformat';

const AnswerComponent = ({id, body, answerer_name, helpfulness, date, handleHelpful, addHelpful, handleReport, addReport, answerLength, setAnswerLength, answers, setAnswers}) => {
  const [showAnswerHelpful, setShowAnswerHelpful] = useState(true);
  const [showAnswerReport, setShowAnswerReport] = useState(true);

  const handleAnswerHelpful = (e) => {
    e.preventDefault();
    axios.put(`/api/qa/answers/${id}/helpful`)
    .then(res => null)
    .catch(err => console.log(err));
  };

  const handleAnswerReport = (e) => {
    e.preventDefault();
    axios.put(`/api/answer/${id}/report`)
    .then(res => null)
    .catch(err => console.log(err));
  };

  return (
    <div className="answer">
    <br></br>
    <div className="answer-details">
    <h3 className="answer-title">A: {body}</h3>
    <div className="answer-helpful-report">
    {showAnswerHelpful ? <small> Helpful Rating: {helpfulness} <button id="answerHelpful" onClick ={(e) => {handleAnswerHelpful(e); setShowAnswerHelpful(false)}}>Helpful?</button> </small> :
    <small> Helpful Rating: {helpfulness + 1} </small>}
    {showAnswerReport ? <small> <button id="answerReport" onClick ={(e) => {handleAnswerReport(e); setShowAnswerReport(false)}}>Report</button></small> :
    <small><button id="answerReport">Reported</button></small>}
    </div>
    </div>
    {answerer_name === 'Seller' ?
    <small className='answerer-name-date'>by <b>{answerer_name}</b>, {dateFormat(`${date}`, "mmmm dS, yyyy")}</small> :
    <small className='answerer-name-date'>by {answerer_name}, {dateFormat(`${date}`, "mmmm dS, yyyy")}</small>
    }
    <br></br>
    </div>
)};

export default AnswerComponent;