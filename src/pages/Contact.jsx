import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      // You can add success message or redirect here
    }, 1000)
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className='min-h-screen w-full dark:bg-gray-950 bg-gray-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
      <div className='max-w-2xl w-full space-y-6 sm:space-y-8'>
        
        {/* Header Section */}
        <div className='text-center lg:text-left space-y-4'>
          <h3 className='text-green-500 font-bold text-lg sm:text-xl lg:text-2xl'>
            What's Next?
          </h3>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-300'>
            Get In Touch
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0'>
            Let's Chat! Whether you have a question, a project idea, or just want to connect, 
            I'm always happy to hear from you. Drop me a message, and I'll be in touch soon!
          </p>
        </div>

        {/* Contact Form */}
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            
            {/* Name Input */}
            <div className='space-y-2'>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Full Name
              </label>
              <input
                id="name"
                type='text'
                placeholder='Enter your full name'
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className='w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
              />
            </div>

            {/* Email Input */}
            <div className='space-y-2'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Email Address
              </label>
              <input
                id="email"
                type='email'
                placeholder='Enter your email address'
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className='w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
              />
            </div>

            {/* Message Textarea */}
            <div className='space-y-2'>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Message
              </label>
              <textarea
                id="message"
                placeholder='Tell me about your project or just say hello...'
                required
                rows="6"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className='w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none'
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className='w-full sm:w-auto px-8 py-3 sm:py-4 bg-transparent text-green-500 border-2 border-green-500 rounded-lg font-semibold text-sm sm:text-base hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:scale-105 active:scale-95'
            >
              {isSubmitting ? (
                <span className='flex items-center justify-center gap-2'>
                  <div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
                  Sending...
                </span>
              ) : (
                'Say Hello 👋'
              )}
            </button>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className='text-center lg:text-left'>
          <p className='text-gray-500 dark:text-gray-400 text-sm'>
            You can also reach me directly at{' '}
            <a 
              href="mailto:ogolacarey254@gmail.com" 
              className='text-green-500 hover:text-green-600 transition-colors underline'
            >
              ogolacarey254@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact