// import React from 'react'
// import {motion } from 'framer-motion'
// import Reveal from './Reveal';

// const experiences =[
//     {
//         company: 'Freelancer',
//         period: '2021 - present',
//         description: 'i am working with many project that reqested users and i am very comfortable in this field'
//     },
//     // {
//     //     company: 'second company',
//     //     period: '2020 - present',
//     //     description: 'Description of your experience in this company'
//     // },
//     // {
//     //     company: 'third company',
//     //     period: '2020 - present',
//     //     description: 'Description of your experience in this company'
//     // },
//     // {
//     //     company: 'fourth company',
//     //     period: '2020 - present',
//     //     description: 'Description of your experience in this company'
//     // }
// ]

// const experiance = () => {
//   return (
//     <div className='p-8 max-w-[600px] mx-auto'>
//         <h1 className='mb-12 text-4xl font-bold text-center text-gray-200'>Experience</h1>
//         <motion.div
//         className='space-y-8'
//         initial='hidden'
//         animate='visible'
//         >
//             {experiences.map((experiance, index)=>(
//                 <Reveal>
//                 <motion.div
//                 key={index}
//                 initial='hidden'
//                 whileInView='visible'
//                 viewport={{once: false, amount: 0.3}}
//                 transition={{duration: 1}}
//                 className='p-6 transition-shadow duration-300 border border-purple-600 rounded-lg shadow-md hover:shadow-xl bg-purple-700/10'
//                 >
//                    <h2 className='text-2xl font-semibold text-gray-100'>{experiance.company}</h2>
//                   <p className='text-gray-300'>{experiance.period}</p> 
//                   <p className='mt-4 text-gray-400 '>{experiance.description}</p> 
//                 </motion.div>
//                 </Reveal>
//             ))}
            
//         </motion.div>
      
//     </div>
//   )
// }

// export default experiance
