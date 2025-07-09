import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import Reveal from './Reveal';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        'service_46bi8tl', // Replace with your EmailJS service ID
        'template_xnss1vh', // Replace with your EmailJS template ID
        form,
        'VDBuBy6ZrRPU6LGet' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setIsSubmitted(true);
          setErrorMessage('');
          form.reset();
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.error('EmailJS error:', error);
          setErrorMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className='px-6 max-w-[650px] mx-auto md:my-12' id='contact'>
      <Reveal>
        <div className='place-items-center'>
          <form
            onSubmit={handleSubmit}
            className='max-w-6xl p-5 md:p-12 bg-gray-800/50 rounded-lg shadow-lg'
            id='form'
          >
            <p className='mb-4 text-2xl font-bold text-gray-100'>
              Let’s Connect!
            </p>
            <input
              type='text'
              id='name'
              placeholder='Your Name'
              name='name'
              required
              className='w-full py-3 px-4 mb-4 border border-purple-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <input
              type='email'
              id='email'
              placeholder='Your Email'
              name='email'
              required
              className='w-full py-3 px-4 mb-4 border border-purple-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <input
              type='text'
              id='subject'
              placeholder='Subject'
              name='subject'
              required
              className='w-full py-3 px-4 mb-4 border border-purple-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <textarea
              id='message'
              cols='30'
              rows='5'
              placeholder='Your Message'
              name='message'
              required
              className='w-full py-3 px-4 mb-4 border border-purple-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <button
              type='submit'
              className='w-full py-3 text-xl font-semibold text-gray-100 rounded-md bg-purple-600 hover:bg-purple-700 transition'
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className='mt-4 text-lg text-green-400 font-semibold'>
                Message sent successfully!
              </p>
            )}
            {errorMessage && (
              <p className='mt-4 text-lg text-red-400 font-semibold'>
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </Reveal>
      <div className='flex justify-center items-center mt-10 gap-7'>
        <div className='p-5 rounded-lg bg-gray-800/40'>
          <h3 className='text-2xl font-semibold text-white md:text-4xl'>
            5 <span>+</span>
          </h3>
          <p className='text-xs md:text-base'>
            <span>Years of experience</span>
          </p>
        </div>
        <div className='p-4 rounded-lg bg-gray-800/40'>
          <h3 className='text-2xl font-semibold text-white md:text-4xl'>
            100 <span>+</span>
          </h3>
          <p className='text-xs md:text-base'>
            <span>Projects</span>
          </p>
        </div>
        <div className='p-5 rounded-lg bg-gray-800/40'>
          <h3 className='text-2xl font-semibold text-white md:text-4xl'>
            50 <span>+</span>
          </h3>
          <p className='text-xs md:text-base'>
            <span>Happy clients</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Update your EmailJS template to include the following placeholders:
// {{name}}, {{time}}, {{message}}

export default Contact;
