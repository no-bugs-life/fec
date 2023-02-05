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
          <option value='helpful'>Helpful</option>
          <option value='newest'>Newest</option>
          <option value='relevant'>Relevant</option>
        </select>
      </label>
    </form>
  );
}

export default SortOption;