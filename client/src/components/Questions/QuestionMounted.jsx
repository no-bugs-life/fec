import React, {useState, useEffect} from 'react';
import QuestionComponent from './QuestionComponent.jsx';
import AddQuestion from './AddQuestion.jsx';
import Search from './Search.jsx';
import App from '../App.jsx';
import axios from 'axios';
import '../../css/Questions/styles.css';

const QuestionMounted = ({product, setProduct}) => {
  const [question, setQuestion] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [listLength, setListLength] = useState(4)
  const [more, setMore] = useState();
  const [search, setSearch] = useState('');
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showQuestionHelpful, setShowQuestionHelpful] = useState(true);


  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      axios.get('http://localhost:3000/api/qa/questions', {
        params: {
          count: 100,
          product_id: product.id
        }
      })
      .then((res) => {
        console.log('questions data', res.data);
        setQuestion(res.data);
        setMore(res.data.results.length)
        return res.data
      })
      .then((data) => {
        const allPromises= [];
        if (Object.keys(data).length !== 0) {
          if (data.results.length > 1) {
            for (let i = 0; i < data.results.length; i++) {
              if (Object.keys(data.results[i].answers).length > 0) {
                allPromises.push(
                  axios.get(`http://localhost:3000/api/qa/questions/${data.results[i].question_id}/answers`, {
                    params: {
                      question_id: data.id
                    }
                  })
                )
              }
            }
            let allAnswers = {};
            Promise.all(allPromises)
              .then((res) => {
                for(let i in res){
                  allAnswers[res[i].data.question] = res[i].data.results
                }
                setAnswers(allAnswers);
                setLoading(false);
              })
              .catch(err => console.log(err))
          }
        }
      })
      .catch(err => console.log(err))
    }
  }, [product]);

  if (isLoading) {
    return <div className="question">Loading...</div>;
  }

  return (
    <div className="questions">
      <h1>Questions & Answers</h1>
      <br></br>
      <div className="question-search">
      <Search search={search} setSearch={setSearch}/>
      </div>
      <br></br>
      {question.results
      .filter((oneQuestion) => {
        if (search.length < 3) {
          return oneQuestion
        } else if (oneQuestion.question_body.toLowerCase().includes(search.toLowerCase())) {
          return oneQuestion
        }})
      .slice(0, listLength)
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
      <div className="questions-buttons">
      {more > 0 ? <button id="more-questions" onClick={() => {setListLength(listLength + 2)}}>More Answered Questions</button>: null}
      <button id="add-question" onClick={() => setShowAddQuestion(true)}> Add a Question</button>
      <AddQuestion onClose={() => setShowAddQuestion(false)} showAddQuestion={showAddQuestion} productName={product.name} id={product.id}/>
      </div>
    </div>
  )};

export default QuestionMounted;