import { motion } from "framer-motion";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profilepic from "../assets/profile.jpeg";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {

  const downloadFileAtURL = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.substring(url.lastIndexOf('/') + 1); // Extracts filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid gap-8 md:grid-cols-2 place-items-center'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Video Editor",
              1000,
              "Social Media Manager",
              1000,
              "Graphic Designer",
              1000,
              
            ]}
            speed={50}
            repeat={Infinity}
            className='mb-4 text-xl font-bold text-gray-400 md:text-5xl italic-'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 text-5xl tracking-tight text-gray-200 md:text-6xl"
          >
            HEY, I AM <br />
            <span className="text-purple-500">CHANAKA BANDARA</span>
          </motion.p>
          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-6 text-lg max-w-[300px] md:max-w-[500px] text-gray-300 md:text-2xl"
          >
            I am working at the voice of asia media network (Siyatha TV News Room)
          </motion.p> */}
          
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-row items-center gap-6 my-4 md:mb-0"
        >
            <motion.button
            onClick={()=>{downloadFileAtURL('http://localhost:3000/chanaka_CV.pdf')}}
            whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"}}
            className="z-10 p-4 font-bold text-gray-200 border rounded cursor-pointer md:w-auto-purple-500-xl"
            >
                Download CV
            </motion.button>
            
        </motion.div>
        </motion.div>

        <motion.img
            src={profilepic}
            className="w-[300px] md:w-[450px] "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            
        </motion.img>
      </div>
      {/* <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 1, delay:2 }}
        className="flex flex-row items-center justify-center w-full px-12 py-24 text-7xl md:px-0"
       >
        <p className="mr-6 text-gray-200">My Tech Stack</p>
        
        <img src={AdobePremiereProIcon} alt="Adobe Premiere Pro" className="mx-2 w-10 h-10" />
        <img src={AdobePhotoshopIcon} alt="Adobe Premiere Pro" className="mx-2 w-10 h-10" />
      </motion.div> */}
      
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400}/>
      </div>
    </div>
  );
};

export default Hero;
