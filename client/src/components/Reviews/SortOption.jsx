import React, {useState} from 'react';

const SortOption = ({handleSortChange}) => {

  let [option, setOption] = useState('Relevant')

  const handleSubmit = (e) => {
    e.preventDefault();
    setOption(e.target.value);
    handleSortChange(e.target.value);
  }

  return (
    <form>
      <label>
        {'Sort by: '}
        <select value={option} onChange={handleSubmit}>
          <option value='Helpful'>Helpful</option>
          <option value='Newest'>Newest</option>
          <option value='Relevant'>Relevant</option>
        </select>
      </label>
    </form>
  );
}

export default SortOption;