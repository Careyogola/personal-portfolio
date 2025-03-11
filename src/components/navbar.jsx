import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row items-center justify-between'>
      <div className='h-auto'>
        <img src='/carey-no-bg.png' className='h-15 w-25'/>
      </div>
        <div className='py-4 px-4 flex flex-row gap-4 items-center justify-end'>
            <a className='text-normal font-light border border-gray-100 border-solid rounded-sm py-2 px-4 ' href='/'>Home</a>
            <a className='text-normal font-light border border-gray-100 border-solid rounded-sm py-2 px-4 ' href='/about'>About</a>
            <a className='text-normal font-light border border-gray-100 border-solid rounded-sm py-2 px-4 ' href='/projects'>Projects</a>
        </div>
    </nav>
  )
}

export default Navbar