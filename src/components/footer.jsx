import { FaFacebook, FaInstagram,} from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
      <div className='dark:bg-gray-950 h-auto flex lg:flex-row justify-evenly items-center overflow-y-auto md:h-auto p-4 w-full bottom-0 left-0'>
        <h3 className='text-purple-100'>Carey Ogola
        </h3>
        
        <div className='flex flex-row gap-4'>

          <a href='https://facebook.com' className='hover:text-purple-100 text-white'>
            <FaFacebook />
          </a>
          <a href='https://instagram.com' className='hover:text-purple-100 text-white'>
            <FaInstagram />
          </a>
         
        </div>
      </div>
    );
  };
  export default Footer;