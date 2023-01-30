import React, {useState} from 'react';

const SortOption = () => {
  let [option, setOption] = useState('Relevant')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {'Sort by: '}
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value='Helpful'>Helpful</option>
          <option value='Newest'>Newest</option>
          <option value='Relevant'>Relevant</option>
        </select>
      </label>
    </form>
  );
}

export default SortOption;