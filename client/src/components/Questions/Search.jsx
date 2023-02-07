import React, {useState} from 'react';

const Search = ({search, setSearch}) => {

  return (
    <div>
      <form>
      <input
      type='text'
      value={search}
      placeholder='Search...'
      onChange={(e) => setSearch(e.target.value)}/>
    </form>
    </div>
  );
};

export default Search;