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
    axios.put(`http://localhost:3000/api/qa/answers/${id}/helpful`)
    .then(res => null)
    .catch(err => console.log(err));
  };

  const handleAnswerReport = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/answer/${id}/report`)
    .then(res => null)
    .catch(err => console.log(err));
  };

  return (
    <div className="answer">
    <h4>A: {body}</h4>
    {answerer_name === 'Seller' ?
    <small>by <b>{answerer_name}</b>, {dateFormat(`${date}`, "mmmm dS, yyyy")}</small> :
    <small>by {answerer_name}, {dateFormat(`${date}`, "mmmm dS, yyyy")}</small>
    }
    <div className="answer-helpful-report">
    {showAnswerHelpful ? <small> Helpful Rating: {helpfulness} <button id="answerHelpful" onClick ={(e) => {handleAnswerHelpful(e); setShowAnswerHelpful(false)}}>Helpful?</button> </small> :
    <small> Helpful Rating: {helpfulness + 1} </small>}
    {showAnswerReport ? <small> <button id="answerReport" onClick ={(e) => {handleAnswerReport(e); setShowAnswerReport(false)}}>Report</button></small> :
    <small><button id="answerReport">Reported</button></small>}
    </div>
    </div>
)};

export default AnswerComponent;