import React, { useEffect, useState } from 'react';


const Loader = ({ onComplete }) => {
  const [showsvg, setShowsvg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowsvg(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [onComplete]);

  return (
    <div className='flex items-center justify-center h-screen dark:bg-gray-950'>
      {showsvg && <img src="./Loader.svg" alt="Loading..." />}
    </div>
  );
};

export default Loader;
