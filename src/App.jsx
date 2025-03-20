import React from 'react';
import Footer from './components/footer';
import MainContent from './components/hero';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <MainContent />
      
    </div>
  );
};

export default App;
