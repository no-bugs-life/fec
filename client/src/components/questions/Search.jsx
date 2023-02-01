import React, {useState} from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <form>
      <input
      type='text'
      value={search}
      placeholder='Search...'
      onChange={(e) => setSearch(e.target.value)}/>
      <button>Search</button>
    </form>
    </div>
  );
};

export default Search;