import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }
  return (
    <div className='flex flex-col lg:items-center sm:items-start sm:justify-center lg:justify-start dark:bg-gray-950 h-screen w-full gap-6 pr-6 pl-6'>
        <h3 className='text-green-500 mt-14 font-bold text-2xl'>What's Next?</h3>
        <h1 className='text-4xl font-bold text-gray-300 '>Get In Touch</h1>
        <p className='text-gray-400'>Let’s Chat! Whether you have a question, a project idea, or just want to connect,<br/> I’m always happy to hear from you. Drop me a message, and I’ll be in touch soon!</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input 
              type='text' 
              placeholder='Name' 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='p-3 bg-gray-100 lg:w-lg rounded'
            />
            <input 
              type='email' 
              placeholder='Email' 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='p-3 bg-gray-100 lg:w-lg rounded'
            />
            <textarea 
              placeholder='Message' 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className=' bg-gray-100 lg:w-lg h-40 pt-2 pl-2 rounded'>
            </textarea>
            
        </form>
        <div>
        <button className='bg-inherit  text-green-500 border cursor-pointer border-green-500 p-4 hover:bg-green-500 transition hover:text-white  rounded'>Say Hello</button>
        </div>
    </div>
  )
}

export default Contact