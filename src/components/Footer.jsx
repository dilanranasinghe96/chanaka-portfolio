import React from 'react';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1140px] mx-auto flex flex-col items-center text-center py-8'>
      <div className='flex flex-col items-center mb-6'>
        {/* <FaHome size={20} className="text-white mb-2" />
        <div className='text-white text-xl'>
          <p>Dambulla,</p>
          <p>Sri Lanka.</p>
        </div> */}
      </div>
      
      <div className='flex flex-col items-center mb-6'>
        <h4 className='text-white text-lg flex items-center'>
          <FaMailBulk size={20} className="text-white mr-2" />
          <a href="mailto:yeschanaka@gmail.com">yeschanaka@gmail.com</a>
        </h4>
      </div>

      <div className='flex flex-col items-center mb-6'>
        <h4 className='text-white text-lg flex items-center'>
          <FaPhone size={20} className="text-white mr-2" />
          <a href="tel:+94702643632">+94 70 264 36 32</a>
        </h4>
      </div>
      
    
      
      {/* <div className='flex flex-col items-center mb-6'>
        <h4 className='text-white text-xl pb-4'>About the company</h4>
        <p className='text-white text-lg mb-4'>This is me Dilan Ranasinghe.</p>
      </div> */}
      
      <div className='flex space-x-4'>
        <a href="https://www.facebook.com/chanuksranasinghe" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="text-white" />
        </a>
        <a href="https://www.linkedin.com/in/chanuksranasinghe/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-white" />
        </a>
        {/* <a href="https://github.com/dilanranasinghe96" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="text-white" />
        </a> */}
        <a href="https://wa.me/+94702643632" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} className="text-white" />
        </a>

        
      </div>
      <div className='flex flex-col items-center mb-6 p-4 space-y-4'>
  <h4 className='text-white text-sm flex items-center'>
    @powered by  
    <a href="https://wa.me/+94771501357" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-400">Dilan Ranasinghe</a>
  </h4>
  {/* You can add more elements here, and they will have a 4-unit gap between them */}
</div>

    </div>
    
  )
}

export default Footer;
