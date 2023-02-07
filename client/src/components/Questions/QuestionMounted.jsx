import React, {useState, useEffect} from 'react';
import QuestionComponent from './QuestionComponent.jsx';
import AddQuestion from './AddQuestion.jsx';
import Search from './Search.jsx';
import App from '../App.jsx';
import axios from 'axios';

const QuestionMounted = ({product, setProduct}) => {
  const [question, setQuestion] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [listLength, setListLength] = useState(4)
  const [more, setMore] = useState(true);
  const [search, setSearch] = useState('');
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showQuestionHelpful, setShowQuestionHelpful] = useState(true);


  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      axios.get('http://localhost:3000/api/qa/questions', {
        params: {
          product_id: product.id
        }
      })
      .then((res) => {
        console.log('results', res.data);
        setQuestion(res.data);
      })
      .catch(err => console.log(err))
    }
  }, [product]);

  useEffect(() => {
    if (Object.keys(question).length !== 0) {
      if (question.results.length > 1) {
        for (let i = 0; i < question.results.length; i++) {
          axios.get(`http://localhost:3000/api/qa/questions/${question.results[i].question_id}/answers`, {
            params: {
              question_id: question.id
            }
          })
          .then((res) => {
            console.log('answers', res.data);
            setAnswers({...answers, [res.data.question]: res.data.results});
            setLoading(false);
          })
          .catch(err => console.log(err))
        }
      } else {
        axios.get(`http://localhost:3000/api/qa/questions/${question.results[0].question_id}/answers`, {
          params: {
            question_id: question.id
          }
        })
        .then((res) => {
          console.log('answers', res.data);
          setAnswers({...answers, [res.data.question]: res.data.results});
          setLoading(false);
        })
        .catch(err => console.log(err))
      }
    }}, [question]);


  if (isLoading) {
    return <div className="question">Loading...</div>;
  }

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search search={search} setSearch={setSearch}/>
      {question.results.slice(0, listLength)
      .filter((oneQuestion) => {
        if (search.length < 3) {
          return oneQuestion
        } else if (oneQuestion.question_body.toLowerCase().includes(search.toLowerCase())) {
          return oneQuestion
        }})
      .map((oneQuestion, index) =>
      (
        <QuestionComponent key={index}
        id={oneQuestion.question_id}
        body={oneQuestion.question_body}
        asker_name={oneQuestion.asker_name}
        helpfulness={oneQuestion.question_helpfulness}
        date={oneQuestion.question_date}
        answers={answers[oneQuestion.question_id] ? answers[oneQuestion.question_id] : []}
        setAnswers={setAnswers}
        productName={product.name}/>
      ))}
      {more ? <button id="more" onClick={() => {setMore(false); setListLength(question.results.length)}}>More Answered Questions</button>: null}
      <button id="add-question" onClick={() => setShowAddQuestion(true)}>Add a Question</button>
      <AddQuestion onClose={() => setShowAddQuestion(false)} showAddQuestion={showAddQuestion} productName={product.name}/>
    </div>
  )};

export default QuestionMounted;