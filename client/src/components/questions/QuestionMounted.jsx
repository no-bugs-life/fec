import React, {useState} from 'react';
import QuestionComponent from './QuestionComponent.jsx';
import Search from './Search.jsx';

const QuestionMounted = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='questionsandanswers'>
      <h1>Questions & Answers</h1>
      <Search />
      <QuestionComponent />
      <small><button id='load'>Load More Answers</button></small>
      {/* <AddQuestion /> */}
      <button id='more'>More Answered Questions</button>
    </div>
  );
};

export default QuestionMounted;