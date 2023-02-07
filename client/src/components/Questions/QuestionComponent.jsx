import React, {useState, useEffect} from 'react';
import AddAnswer from './AddAnswer.jsx';
import LoadMoreQuestions from './LoadMoreQuestions.jsx'
import Search from './Search.jsx';
import App from '../App.jsx';
import axios from 'axios';

const QuestionComponent = ({product, setProduct}) => {
  const [question, setQuestion] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [answers, setAnswer] = useState({});
  const [questionHelpful, setQuestionHelpful] = useState(false);
  const [answerHelpful, setAnswerHelpful] = useState(false);
  const [questionReport, setQuestionReport] = useState(false);
  const [answerReport, setAnswerReport] = useState(false);

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      axios.get('http://localhost:3000/api/qa/questions', {
        params: {
          product_id: 40348 //product.id
        }
      })
      .then((res) => {
        //console.log('results', res.data);
        setQuestion(res.data);
      })
      .catch(err => console.log(err))
    }
  }, [product]);

  useEffect(() => {
    if (Object.keys(question).length !== 0) {
      axios.get(`http://localhost:3000/api/qa/questions/${question.results[0].question_id}/answers`, {
        params: {
          question_id: 40348 //question.id
        }
      })
      .then((res) => {
        //console.log('answers', res.data);
        setAnswer(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err))
    }
  }, [question]);

  const handleHelpful = () => {
    axios.put(`http://localhost:3000/api/qa/questions/${question.results[0].question_id}/helpful`, {
      params: {
        answer_id: 40348 //question.id
      }
    })
    .then((res) => {
      console.log('helpful', res.data);
      setHelpful(res.data);
    })
    .catch(err => console.log(err))
  };

  if (isLoading) {
    return <div className="question">Loading...</div>;
  }

  return (
    <div className="question">
    <h2>Q: {question.results[0].question_body} </h2>
    <small>by {question.results[0].asker_name}, {question.results[0].question_date} | </small>
    {questionHelpful === true ? <small> Helpful Rating: {question.results[0].question_helpfulness + 1} </small> : <small> Helpful Rating: {question.results[0].question_helpfulness}</small>}
    <small> <button id ="questionHelpful" onClick ={() => setQuestionHelpful(!questionHelpful)}>Helpful?</button> | </small>
    <small> <button id="questionReport" onClick={() => setQuestionReport(!questionReport)}>Report </button></small>
    {questionReport === true? <small> Reported!</small> : null}
    <h2>A: {answers.results[0].body}</h2>
    <small>by {answers.results[0].answerer_name}, {answers.results[0].date} | </small>
    {answerHelpful === true ? <small>  Helpful Rating: {answers.results[0].helpfulness + 1}</small> : <small> Helpful Rating: {answers.results[0].helpfulness} </small>}
    <small> <button id ="answerHelpful" onClick ={() => setAnswerHelpful(!answerHelpful)}>Helpful?</button> | </small>
    <small> <button id="answerReport" onClick={() => setAnswerReport(!answerReport)}>Report </button></small>
    {answerReport === true? <small> Reported!</small> : null}
    </div>
  );
};

export default QuestionComponent;
