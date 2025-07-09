import React from 'react';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-gray-900 py-6'>
      <div className='max-w-[1140px] mx-auto flex flex-col items-center text-center'>
        {/* Contact Information */}
        <div className='w-full mb-4'>
          <h3 className='text-white text-lg font-semibold mb-2'>Contact Information</h3>
          <div className='flex flex-col md:flex-row justify-center gap-4'>
            <h4 className='text-white text-base flex items-center justify-center'>
              <FaMailBulk size={18} className="text-blue-400 mr-2" />
              <a href="mailto:yeschanaka@gmail.com" className="hover:text-blue-400 transition-colors">
                yeschanaka@gmail.com
              </a>
            </h4>
            
            <h4 className='text-white text-base flex items-center justify-center'>
              <FaPhone size={18} className="text-blue-400 mr-2" />
              <a href="tel:+94702643632" className="hover:text-blue-400 transition-colors">
                +94 70 264 36 32
              </a>
            </h4>
          </div>
        </div>
        
        {/* Social Media */}
        <div className='w-full mb-4'>
          <h3 className='text-white text-lg font-semibold mb-2'>Connect With Me</h3>
          <div className='flex justify-center space-x-6'>
            <a href="https://www.facebook.com/chanuksranasinghe" target="_blank" rel="noopener noreferrer" 
              className="hover:transform hover:scale-110 transition-transform">
              <FaFacebook size={24} className="text-white hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/chanuksranasinghe/" target="_blank" rel="noopener noreferrer"
              className="hover:transform hover:scale-110 transition-transform">
              <FaLinkedin size={24} className="text-white hover:text-blue-400" />
            </a>
            <a href="https://wa.me/+94702643632" target="_blank" rel="noopener noreferrer"
              className="hover:transform hover:scale-110 transition-transform">
              <FaWhatsapp size={24} className="text-white hover:text-blue-400" />
            </a>
          </div>
        </div>
        
        {/* Copyright and Credits */}
        <div className='w-full border-t border-gray-700 pt-3'>
          <p className='text-white text-xs'>
            &copy; {currentYear} Chanaka Ranasinghe. All rights reserved.
          </p>
          <p className='text-white text-xs mt-1'>
            Developed by{' '}
            <a href="https://www.linkedin.com/in/dilan-ranasinghe-801996255/" target="_blank" rel="noopener noreferrer" 
              className="text-blue-400 hover:underline">
              Dilan Ranasinghe
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
