import { motion } from "framer-motion";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profilepic from "../assets/profile.jpeg";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen flex items-center w-screen max-w-full overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-8 relative py-16'>
      <div className='grid gap-12 md:grid-cols-2 place-items-center max-w-[1200px] mx-auto w-full'>
        {/* Text Content */}
        <motion.div
          className="order-1 text-center md:text-left max-w-full"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Professional Title Animation */}
          <div className="mb-6 overflow-hidden">
            <TypeAnimation
              sequence={[
                "Video Editor",
                1500,
                "Social Media Manager",
                1500,
                "Graphic Designer",
                1500,
              ]}
              speed={60}
              repeat={Infinity}
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-500 tracking-wide max-w-full'
            />
          </div>
          
          {/* Name with animated reveal */}
          <motion.div
            className="overflow-hidden mb-8 max-w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-100 break-words">
              HEY, I AM <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                CHANAKA BANDARA
              </span>
            </h1>
          </motion.div>
          
          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 mt-10"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-transparent text-white border border-purple-500 font-medium rounded-lg hover:bg-purple-600/10 transition-all duration-300"
            >
              View Portfolio
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="order-2 relative max-w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <img
              src={profilepic}
              className="w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px] object-cover rounded-lg shadow-lg border-1 border-gray-800 max-w-full"
              alt="Chanaka Bandara"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Background effect */}
      <div className="absolute inset-0 -z-10 hidden md:block overflow-hidden">
        <ShinyEffect left={0} top={0} size={1400}/>
      </div>
    </div>
  );
};

export default Hero;
