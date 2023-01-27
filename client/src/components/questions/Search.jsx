import React, {useState} from 'react';
import QuestionComponent from './QuestionComponent.jsx';

const Search = ({search, setSearch}) => {

  return (
    <form>
    <input
    type='text'
    value={search}
    placeholder='Search...'
    onChange={(e) => setSearch(e.target.value)}/>
    <button>Search</button>
  </form>
  );
};

export default Search;