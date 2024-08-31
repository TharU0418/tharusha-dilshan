'use client';

import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion';

const Works = () => {
  return (
    <div className='py-10'>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount: 0.25}}
        >
            <motion.h1 variants={textVariant(1.1)}>
                <h1 className='text-4xl items-center text-center'>Work Experience</h1>
            </motion.h1>
            <div className='w-full mt-12 grid lg:grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className='lg:w-32 md:w-20 w-16'
                            />
                         </div>
                            
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </Button> 
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default Works