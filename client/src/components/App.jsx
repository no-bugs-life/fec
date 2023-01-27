import React from 'react';
import '../css/App.css'

import RelatedList from '../components/Prodlists/RelatedList.jsx';
import OutfitList from '../components/Prodlists/OutfitList.jsx'
import QuestionMounted from '../components/Questions/QuestionMounted.jsx';

const App = () => {

  return (
    <div className='app'>
      <RelatedList />
      <OutfitList />
      <QuestionMounted />
    </div>
  );
};

export default App;