import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col lg:items-center sm:items-start sm:justify-center lg:justify-start dark:bg-gray-950 h-screen w-full gap-6 pr-6 pl-6'>
        <h3 className='text-green-500 mt-14 font-bold text-2xl'>What's Next?</h3>
        <h1 className='text-4xl font-bold text-gray-300 '>Get In Touch</h1>
        <p className='text-gray-400'>Let’s Chat! Whether you have a question, a project idea, or just want to connect,<br/> I’m always happy to hear from you. Drop me a message, and I’ll be in touch soon!</p>
        <form className='flex flex-col gap-4'>
            <input type='text' placeholder='Name' required className='p-3 bg-gray-100 lg:w-lg rounded'/>
            <input type='email' placeholder='Email' required className='p-3 bg-gray-100 lg:w-lg rounded'/>
            <textarea placeholder='Message' required className=' bg-gray-100 lg:w-lg h-40 pt-2 pl-2 rounded'></textarea>
            
        </form>
        <div>
        <button className='bg-inherit  text-green-500 border cursor-pointer border-green-500 p-4 hover:bg-green-500 transition hover:text-white  rounded'>Say Hello</button>
        </div>
    </div>
  )
}

export default Contact