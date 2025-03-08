import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/hero';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <MainContent />
      <Footer />
    </div>
  );
};

export default App;
