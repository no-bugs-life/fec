import React from 'react';
import '../css/App.css'

import RelatedList from '../components/Prodlists/RelatedList.jsx';
import OutfitList from '../components/Prodlists/OutfitList.jsx'

const App = () => {
  return (
    <div className='app'>
      <RelatedList />
      <OutfitList />
    </div>
  )
}

export default App;