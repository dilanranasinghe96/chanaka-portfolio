import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://getform.io/f/bdrypmdb', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error('Form submission error:', response.statusText);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className='px-6 max-w-[650px] mx-auto md:my-12' id='contact'>
      <Reveal>
        <div className=' place-items-center'>
          
           
            
          <form
            onSubmit={handleSubmit}
            className='max-w-6xl p-5 md:p-12'
            id='form'
          >
            <p className='mb-2 text-xl font-bold text-gray-100'>
              Let`s connect!
            </p>
            <input
              type='text'
              id='name'
              placeholder='Your Name ...'
              name='name'
              className='w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md'
            />
            <input
              type='email'
              id='email'
              placeholder='Your Email ...'
              name='email'
              className='w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md'
            />
            <textarea
              id='textarea'
              cols='30'
              rows='4'
              placeholder='Your Message ...'
              name='textarea'
              className='w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md'
            />
            <button
              type='submit'
              className='w-full py-3 text-xl font-semibold text-gray-100 rounded-md bg-primary-color '
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className='mt-4 text-lg text-purple-400 font- semibold'>
                Message sending is successful!
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
    <p className='text-xs md:text-base'><span>Years of experience</span></p>
  </div>

  <div className='p-4 rounded-lg bg-gray-800/40'>
    <h3 className='text-2xl font-semibold text-white md:text-4xl'>
      100 <span>+</span>
    </h3>
    <p className='text-xs md:text-base'><span>Projects</span></p>
  </div>
  
  <div className='p-5 rounded-lg bg-gray-800/40'>
    <h3 className='text-2xl font-semibold text-white md:text-4xl'>
      50 <span>+</span>
    </h3>
    <p className='text-xs md:text-base'><span>Happy clients</span></p>
  </div>
</div>

    </div>
    
  );
};

export default Contact;
