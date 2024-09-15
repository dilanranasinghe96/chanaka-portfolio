import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

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
    <div className='fixed top-0 left-0 z-50 w-full bg-opacity-70 backdrop-blur-md'>
      <div className='max-w-100% mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20'>

        <a href='#' className='text-4xl font-bold'>Portfolio</a>

        <ul className='hidden gap-12 cursor-pointer md:flex'>
          <li><Link to="skills" smooth={true} offset={-70} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} offset={-70} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} offset={-70} duration={500}>Contact</Link></li>
        </ul>

        <div onClick={toggleNav} className='z-50 cursor-pointer md:hidden'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? 'open' : 'close'}
          variants={menuVariants}
          className='fixed top-0 left-0 z-40 w-full min-h-screen bg-gray-900'
        >
          <ul className='mt-24 space-y-8 text-4xl font-semibold text-center'>
            <li><Link to="skills" onClick={closeNav} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li><Link to="projects" onClick={closeNav} smooth={true} offset={-70} duration={500}>Projects</Link></li>
            <li><Link to="contact" onClick={closeNav} smooth={true} offset={-70} duration={500}>Contact</Link></li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default NavBar;
