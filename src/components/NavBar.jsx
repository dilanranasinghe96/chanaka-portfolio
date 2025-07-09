import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    close: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 shadow-lg' 
        : 'bg-gray-900/70'
    }`}>
      <div className='max-w-100% mx-auto flex justify-between text-gray-200 text-base sm:text-lg md:text-xl items-center px-4 sm:px-8 md:px-12 h-16 sm:h-18 md:h-20 border-b border-gray-800/50'>

        <a href='#' className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>Portfolio</a>

        <ul className='hidden gap-6 sm:gap-8 md:gap-12 cursor-pointer md:flex'>
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                to={item === 'Home' ? 'hero' : item === 'About' ? 'skills' : item.toLowerCase()} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={toggleNav} className='z-50 cursor-pointer md:hidden'>
          {nav ? 
            <AiOutlineClose size={25} className="sm:size-30 text-blue-400" /> : 
            <AiOutlineMenu size={25} className="sm:size-30 hover:text-blue-400 transition-colors" />
          }
        </div>

        <motion.div
          initial={false}
          animate={nav ? 'open' : 'close'}
          variants={menuVariants}
          className='fixed top-0 left-0 z-40 w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center'
        >
          <ul className='space-y-8 text-center'>
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link 
                  to={item === 'Home' ? 'hero' : item === 'About' ? 'skills' : item.toLowerCase()} 
                  onClick={closeNav} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold hover:text-blue-400 transition-colors relative inline-block"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400/30 to-purple-500/30"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default NavBar;
