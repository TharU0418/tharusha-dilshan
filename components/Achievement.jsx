'use client';
import { achivements } from '@/data';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { PinContainer } from './Pin';

const Achievement = () => {
  return (
    <div className='py-10'>
        <h1 className='text-4xl items-center text-center'>Achievements</h1>

        <div className='flex flex-wrap mt-10'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    centerMode={true}
                    centerSlidePercentage={33.33}
                    showArrows={true}
                >
                    {achivements.map((item) => (
                        <div
                            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[120vw] mr-20'
                            key={item.id}
                        >
                            <PinContainer
                                title={item.title}
                                href={item.href}
                            >
                                <div
                                    className='relative flex items-center justify-center sm:w-96 w-[160vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'
                                >
                                    <div
                                        className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                                        style={{ backgroundColor: '#13162D' }}
                                    >
                                        <img src='./images/bg.png' alt='background' />
                                    </div>

                                    <img
                                        src={item.img}
                                        alt='cover'
                                        className='z-10 absolute bottom-10'
                                    />
                                </div>

                                <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1'>
                                    {item.title}
                                </h1>

                            

                              

                            </PinContainer>
                        </div>
                    ))}
                </Carousel>
            </div>

    </div>
  )
}

export default Achievement