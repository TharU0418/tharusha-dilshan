"use client";

import { projects } from '@/data';
import { PinContainer } from './Pin';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { Meteors } from './ui/Meteors';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion';

const ProjectDetail = ({ project, onClose }) => {
    const handleContainerClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div 
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center' 
            onClick={onClose}
        >
            <div 
                className='p-5 rounded-lg relative' 
                style={{ backgroundColor: '#13162D' }} 
                onClick={handleContainerClick}
            >
                <button onClick={onClose} className='absolute top-2 right-2'>
                    ✖
                </button>
                <h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
                <video src={project.demo} controls className='w-full h-64 object-cover mb-4' />
                <p className='text-lg'>{project.des}</p>
                <div className='flex items-center justify-between mt-7'>
                    <div className='flex items-center'>
                        {project.iconLists.map((icon, index) => (
                            <div
                                key={index}
                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                    transform: `translateX(-${5 * index + 2}px)`,
                                }}
                            >
                                <img src={icon} alt='icons' className='p-2' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MyProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseDetail = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [selectedProject]);

    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-4 z-10"
                style={{ fontSize: '1.5rem' }} // Adjust the font size
            >
                ◀
            </button>
        );

    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-4 z-10"
                style={{ fontSize: '1.5rem' }} // Adjust the font size
            >
                ▶
            </button>
        );

    return (
        <div className='py-10'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.h1 variants={textVariant(1.1)}>
                    <h1 className='text-4xl items-center text-center'>My Projects</h1>
                </motion.h1>
                <div className='flex flex-wrap mt-10'>
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        useKeyboardArrows={true}
                        centerMode={true}
                        centerSlidePercentage={33.33}
                        showArrows={true}
                        renderArrowPrev={renderArrowPrev}
                        renderArrowNext={renderArrowNext}
                    >
                        {projects.map((item) => (
                            <div
                                className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
                                key={item.id}
                                onClick={() => handleCardClick(item)}
                            >
                                <motion.div
                                    variants={fadeIn('left', 'tween', 0.2, 1)}
                                    className='flex-[0.75] flex justify-center flex-col'
                                >
                                    <PinContainer title={item.title} href={item.href}>
                                        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
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
                                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                            {item.title}
                                        </h1>
                                        <p
                                            className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                                            style={{ color: '#BEC1DD', margin: '1vh 0' }}
                                        >
                                            {item.des}
                                        </p>
                                        <div className='flex items-center justify-between mt-7 mb-3'>
                                            <div className='flex items-center'>
                                                {item.iconLists.map((icon, index) => (
                                                    <div
                                                        key={index}
                                                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                                                    >
                                                        <img src={icon} alt='icons' className='p-2' />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <Meteors number={20} />
                                    </PinContainer>
                                </motion.div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                {selectedProject && (
                    <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
                )}
            </motion.div>
        </div>
    );
};

export default MyProjects;