import React from 'react';
import ProgressBar from './ProgressBar.jsx'

const RatingBreakdown = () => {
  return(
    <div>
      <label>
        5 Stars:
        <ProgressBar />
      </label>
      <label>
        4 Stars:
        <ProgressBar />
      </label>
      <label>
        3 Stars:
        <ProgressBar />
      </label>
      <label>
        2 Stars:
        <ProgressBar />
      </label>
      <label>
        1 Stars:
        <ProgressBar />
      </label>
      {'Number% Reccomended'}
    </div>
  );
}

export default RatingBreakdown;