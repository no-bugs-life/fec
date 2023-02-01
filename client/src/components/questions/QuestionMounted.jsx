import React, {useState, useEffect} from 'react';
import QuestionComponent from './QuestionComponent.jsx';
import Search from './Search.jsx';
const axios = require('axios');

const QuestionMounted = ({product, setProduct}) => {

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search />
      <QuestionComponent product={product} setProduct={setProduct}/>
      <small><button id="load">Load More Answers</button></small>
      <button id="more">More Answered Questions</button>
    </div>
  );
};

export default QuestionMounted;