import React, {useState} from 'react';

const Search = ({getQuery}) => {

  const makeSearch = (e) => {
    e.preventDefault();
    getQuery(e.target.value);
  }

  return (
    <input type='text' onChange={makeSearch}/>
  );
}

export default Search;