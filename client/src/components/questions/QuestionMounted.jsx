import React, {useState} from 'react';
import QuestionComponent from './QuestionComponent.jsx';

const QuestionMounted = () => {

  return (
    <h1>Questions & Answers</h1>
    <Search/>
    <QuestionComponent/>
    <small><button id='load'>Load More Answers</button></small>
    <AddQuestion/>
    <button id='more'>More Answered Questions</button>
  );
};

export default QuestionMounted;