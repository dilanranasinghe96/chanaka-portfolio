import React from 'react';
import aeIcon from '../assets/ae.png';
import illustratorIcon from '../assets/illustrator.png';
import PhotoshopIcon from '../assets/photoshop.png';
import PremiereProIcon from '../assets/premiere.png';
import Reveal from './Reveal';

const skills =[
   { 
    category: 'My Tech Stack',
    technologies:[
        {name: 'Adobe Premiere Pro', icon: <img src={PremiereProIcon} alt="Adobe Premiere Pro" className="mx-2 w-10 h-10" />},
        {name: 'Adobe Photoshop', icon: <img src={PhotoshopIcon} alt="Adobe Photoshop" className="mx-2 w-10 h-10" />},
        {name: 'Adobe After Effects', icon: <img src={aeIcon} alt="Adobe After Effects" className="mx-2 w-10 h-10" />},
        {name: 'Adobe Illustrator', icon: <img src={illustratorIcon} alt="Adobe Illustrator" className="mx-2 w-10 h-10" />},
    ]
}];

function Skills() {
  return (
    
    <div className='max-w-[800px] mx-auto flex flex-col justify-center px-4 pb-8 text-gray-200  md:py-12' id='skills'>
        <Reveal>
            {/* About Me Section */}
            <br></br>
            <h3 className='mb-5 text-4xl font-semibold text-center p-4'>About <span>Me</span></h3>
            <p className='w-11/12 mx-auto leading-7 text-justify'>
            I’m Chanaka Bandara, a skilled Video Editor, Graphic Designer, and Social Media Manager. Currently, I work as a Video Editor at Voice of Asia Media Network (Siyatha TV News Room), where I create engaging visuals and content. My expertise in design and digital strategy helps me deliver impactful media experiences and drive brand engagement.
            </p>

            {/* Skills Section */}
            <h2 className='mb-4 text-3xl font-bold text-center mt-12'>Skills</h2>
            <div className='flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8'>
                {skills.map((skill, index) => (
                    <div key={index} className='w-full p-6 border border-purple-900 rounded-lg shadow-lg bg-purple-900/20 md:w-1/2'>
                        <h3 className='mb-4 text-xl font-bold text-center'>{skill.category}</h3>
                        <div className='grid grid-cols-1 gap-4'>
                            {skill.technologies.map((tech, idx) => (
                                <div key={idx} className='flex space-x-2 items-center'>
                                    <span className='text-2xl'>{tech.icon}</span> 
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> 
        </Reveal>   
    </div>
  );
}

export default Skills;
