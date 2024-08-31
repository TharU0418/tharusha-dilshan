'use client';
import { languages, languges } from '@/data'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion';

function Languages() {
  return (
    <div className='py-5'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount: 0.25}}
      >
         <motion.h1 variants={textVariant(1.1)}>
          <h1 className='text-4xl text-center mb-6'>Languages and Frameworks</h1>
         </motion.h1>
        <div className='flex flex-wrap justify-center'>
          {languges.map((item) => (
            <div key={item.name} className='flex flex-col items-center m-4 group'>
              <a 
                //href="https://linkedin.com/in/yourusername" 
                className='block bg-white-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full transition duration-300'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={item.img} className='w-8 h-10' alt={item.name} />
              </a>
              <h6 className='text-xs text-center font-light mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{item.name}</h6>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Languages
