import { React, useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader.jsx';
import { useNavigate } from "react-router";


const MainContent = () => {
  let navigate = useNavigate();


  const [buttonLoading, setButtonLoading] = useState({
    projects: false,
    contact: false,
  });
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonLoading(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [])
  return (
    <div className='w-full h-screen dark:bg-gray-950 p-4'>
      <div className='flex flex-col lg:flex-row justify-evenly items-center py-12 px-6 lg:px-20'>
        <div className='flex flex-col gap-7 items-start'>
          <p className='text-green-500  font-semibold'>Hi, my name is</p>
          <h1 className='text-gray-400 font-extrabold text-7xl'>Carey Ogola</h1>
          <h1 className='text-4xl lg:text-6xl font-bold text-gray-500'>Software Engineer</h1>

          <p className=' text-gray-400'>
            I'm a Software Developer based in Nairobi, Kenya<br />
            I'll help you build beautiful applications and websites.
          </p>

          <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
          <button
    className='bg-inherit border border-solid w-46 rounded p-4 shadow cursor-pointer text-green-500 flex items-center justify-center'
    onClick={() => {
      setButtonLoading({ ...buttonLoading, projects: true });
      setTimeout(() => {
        // <Link to='/projects'></Link>;
        navigate('/projects');
        // window.location.href = '/projects'; // or use navigate() if using react-router-dom v6+
      }, 1000);
    }}
    disabled={buttonLoading.projects}
  >
    {buttonLoading.projects ? <Loader size={20} color='green' /> : 'Browse projects'}
  </button>

  <button
    className='bg-inherit border border-solid w-46 rounded p-4 shadow cursor-pointer text-green-500 flex items-center justify-center'
    onClick={() => {
      setButtonLoading({ ...buttonLoading, contact: true });
      setTimeout(() => {
        navigate('/contact');
        // <Link to='/contact'></Link>;
        // window.location.href = '/contact'; // or use navigate() if using react-router-dom v6+
      }, 1000);
    }}
    disabled={buttonLoading.contact}
  >
    {buttonLoading.contact ? <Loader size={20} color='green' /> : 'Lets talk'}
  </button>
  </div>

          <div className='flex flex-row items-center justify-center gap-6 lg:gap-10'>
            <a href='https://github.com/Careyogola'><FaGithub size={30} color='white' /></a>
            <a href='https://gitlab.com/careyogawo'><FaGitlab size={30} color='white'/></a>
            <a href='https://www.linkedin.com/in/carey-ogola/'><FaLinkedin size={30} color='white'/></a>
          </div>
        </div>

        <div className='hidden lg:block mt-10 lg:mt-0'>
          <img
            className='rounded-sm shadow-sm border border-gray-500'
            src='/Carey.jpeg'
            width={350}
            height={480}
            alt='Carey Ogola'
          />
        </div>
      </div>
    
    </div>
  );
};

export default MainContent;
