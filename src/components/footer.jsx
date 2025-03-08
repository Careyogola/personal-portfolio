import { FaFacebook, FaInstagram,} from "react-icons/fa";

const Footer = () => {
    return (
      <div className='bg-white h-auto flex flex-col md:flex-col md:h-auto p-4 w-full fixed bottom-0 left-0'>
        <h3 className='text-center text-xl'>
          {new Date().getFullYear()} Carey Ogola
        </h3>
        {/* <hr className='border-t border-white/50 py-4' /> */}
        <div className='flex justify-center gap-6'>

          <a href='https://facebook.com' className=' hover:text-gray-400'>
            <FaFacebook />
          </a>
          <a href='https://instagram.com' className='hover:text-gray-400'>
            <FaInstagram />
          </a>
         
        </div>
      </div>
    );
  };
  export default Footer;