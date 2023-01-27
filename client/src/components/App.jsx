import React from 'react';
import '../css/App.css'

import RelatedList from '../components/Prodlists/RelatedList.jsx';
import OutfitList from '../components/Prodlists/OutfitList.jsx'
import QuestionComponent from '../components/Questions/QuestionComponent.jsx';

const App = () => {

  return (
    <div className='app'>
      <RelatedList />
      <OutfitList />
      <QuestionComponent/>
    </div>
  );
};

export default App;