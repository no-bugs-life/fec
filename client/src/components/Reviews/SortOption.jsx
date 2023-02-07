import React, {useState} from 'react';
import '../../css/Reviews/listStyles.css';

const SortOption = ({handleSortChange}) => {

  let [option, setOption] = useState('relevant')

  const handleSubmit = (e) => {
    e.preventDefault();
    setOption(e.target.value);
    handleSortChange(e.target.value);
  }

  return (
    <form className='sort'>
      <label>
        {'Sort on: '}
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