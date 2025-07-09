import React from 'react';
import fbpage from '../assets/fbpage.jpeg';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import project1 from '../assets/project1.jpeg';
import project10 from '../assets/project10.jpeg';
import project12 from '../assets/project12.jpeg';
import project13 from '../assets/project13.jpeg';
import project14 from '../assets/project14.jpeg';
import project15 from '../assets/project15.jpeg';
import project16 from '../assets/project16.jpeg';
import project2 from '../assets/project2.jpeg';
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
  { img: project5 },
  { img: project6 },
  { img: project7 },
  { img: project8 },
  { img: project9 },
  { img: project10 },
  { img: project12 },
  { img: project13 },
  { img: project14 },
  { img: project15 },
  { img: project16 }
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
    <section className='max-w-[1200px] mx-auto px-4 py-16 md:py-24' id='projects'>
      <h2 className='mb-12 text-3xl md:text-4xl font-bold text-gray-200 text-center'>Projects</h2>
      
      {/* Facebook Posts Section */}
      <div className='mb-16'>
        <h3 className='mb-8 text-2xl md:text-3xl font-bold text-gray-200 text-center'>Facebook Posts</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
          {fbPosts.map((post, index) => (
            <Reveal key={index}>
              <div className='aspect-square overflow-hidden rounded-lg shadow-lg'>
                <img
                  src={post.img}
                  className='w-full h-full object-cover transition-transform hover:scale-105'
                  alt={`Facebook Post ${index + 1}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Logo Design Section */}
      <div className='mb-16'>
        <h3 className='mb-8 text-2xl md:text-3xl font-bold text-gray-200 text-center'>Logo Design</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto'>
          {logo.map((item, index) => (
            <Reveal key={index}>
              <div className='aspect-square overflow-hidden rounded-lg shadow-lg'>
                <img
                  src={item.img}
                  className='w-full h-full object-cover transition-transform hover:scale-105'
                  alt={`Logo Design ${index + 1}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Video Projects Section */}
      <div className='mb-16'>
        <h3 className='mb-8 text-2xl md:text-3xl font-bold text-gray-200 text-center'>Video Projects</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6'>
          {videos.map((video, index) => (
            <Reveal key={index}>
              <a 
                href={video.links} 
                target='_blank' 
                rel='noopener noreferrer'
                className='block aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all'
              >
                <img
                  src={video.img}
                  className='w-full h-full object-cover transition-transform hover:scale-105'
                  alt={`Video project ${index + 1}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-white font-medium">Watch Video</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Facebook Page Section */}
      <div>
        <h3 className='mb-8 text-2xl md:text-3xl font-bold text-gray-200 text-center'>Facebook Page</h3>
        <div className='flex flex-col items-center'>
          <a 
            href='https://www.facebook.com/danumapotha123/' 
            target='_blank' 
            rel='noopener noreferrer'
            className='block w-[200px] sm:w-[280px] md:w-[350px] aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all'
          >
            <img
              src={fbpage}
              className='w-full h-full object-cover transition-transform hover:scale-105'
              alt='FB page'
            />
          </a>
          <p className="text-center text-gray-300 mt-4 hover:text-gray-100 transition-colors">
            <a 
              href='https://www.facebook.com/danumapotha123/' 
              target='_blank' 
              rel='noopener noreferrer'
              className="hover:underline"
            >
              Follow our Facebook page for updates
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
