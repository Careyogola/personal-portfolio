import React from 'react';

import MainContent from './components/hero';

import Loader from './components/Loading';

const App = () => {

  return (
    <div className="flex flex-col min-h-screen">
     
      <MainContent />
      
    </div>
  );
};

export default App;
