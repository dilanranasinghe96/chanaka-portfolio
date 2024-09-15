import React from 'react';
import fbpage from '../assets/fbpage.jpeg';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import project1 from '../assets/project1.jpeg';
import project10 from '../assets/project10.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/project6.jpeg';
import project7 from '../assets/project7.jpeg';
import project8 from '../assets/project8.jpeg';
import project9 from '../assets/project9.jpeg';
import video1 from '../assets/video1.jpeg';
import video2 from '../assets/video2.jpeg';
import video3 from '../assets/video3.jpeg';
import video4 from '../assets/video4.jpeg';
import video5 from '../assets/video5.jpeg';
import video6 from '../assets/video6.jpeg';

import Reveal from './Reveal';

const fbPosts = [
  { img: project1 },
  { img: project2 },
  { img: project3 },
  { img: project4 },
  { img: project5 },
  { img: project6 },
  { img: project7 },
  { img: project8 },
  { img: project9 },
  { img: project10 },
//   { img: project11 },
];

const logo = [
    { img: logo1 },
    { img: logo2 },
    
  ];

  const videos = [
    { img: video1,
      links:'https://www.facebook.com/share/v/EGoG2m5YaZTYTcC9/'
     
    },

    { img: video2,
      links:'https://www.facebook.com/share/v/qBjWp3h86LKjH8Bq/'
     
    },

    { img: video3,
      links:'https://www.facebook.com/share/v/FMUeBoGJjnDJAuAK/'
    },

    { img: video4,
      links:'https://www.facebook.com/share/v/1mt21G18TqCCLK2T/'
     
    },

    { img: video5,
      links:'https://youtu.be/MYSgWBqpbWg?si=xIAr3OkdqTd6yMdV'
    },

    { img: video6,
      links:'https://youtu.be/Sky7gwVuYjo?si=43T7jyhCvlM6zhH6'
    },
  ];

const Projects = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='projects'>
      <h2 className='mb-8 text-4xl font-bold text-gray-200'>Projects</h2>
      <h2 className='mb-8 text-4xl font-bold text-gray-200 center text-center'>Facebook Posts</h2>
      
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        
        {fbPosts.map((fbPosts, index) => (
          <Reveal key={index}>
            <div className='w-full p-4'>
              <img
                src={fbPosts.img}
                className='object-cover w-full h-full rounded-lg shadow-lg'
                alt={`Facebook Posts ${index + 1}`}

              />
            </div>
          </Reveal>
        ))}

        <br></br>
      </div>
      <h2 className='mb-8 text-4xl font-bold text-gray-200 center text-center'>Logo Design</h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {logo.map((logo, index) => (
          <Reveal key={index}>
            <div className='w-full p-4'>
              <img
                src={logo.img}
                className='object-cover w-full h-full rounded-lg shadow-lg'
                alt={`Logo Design ${index + 1}`}
              />
            </div>
          </Reveal>
        ))}

        <br></br>

      </div>

      <h2 className='mb-8 text-4xl font-bold text-gray-200 text-center'>Video Projects</h2>
<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
  {videos.map((videos, index) => (
    <Reveal key={index}>
      <div className='w-full p-4'>
        <a href={videos.links} target='_blank' rel='noopener noreferrer'>
          <img
            src={videos.img}
            className='object-cover w-full h-full rounded-lg shadow-lg'
            alt={`Video project ${index + 1}`}
          />
        </a>
      </div>
    </Reveal>
  ))}
</div>
<br></br>
<br></br>

<h2 className='mb-8 text-4xl font-bold text-gray-200 text-center'>Facebook Page</h2>
<div>
  <div className='w-full p-4'>
    <a href='https://www.facebook.com/danumapotha123/' target='_blank' rel='noopener noreferrer'>
      <img
        src={fbpage}
        className='object-cover w-[350px] h-[350px] mx-auto rounded-lg shadow-lg' // Adjusted width and height
        alt='FB page'
      />
    </a>
    <p className="text-center text-gray-300 mt-4"><a href='https://www.facebook.com/danumapotha123/' target='_blank' rel='noopener noreferrer'>Follow our Facebook page for updates</a></p> {/* Added title */}
  </div>
</div>

      
    </div>


            
  );
};

export default Projects;
