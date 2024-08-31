// components/SocialMedia.js
import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { ImProfile } from "react-icons/im";

const SocialMedia = () => {
  return (
    <div className='container'>
      
      {/* <Popover placement="bottom">
      <PopoverTrigger>
      <a href="tel:+94740662095" className='button'>
        <FaPhone />
      </a>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">0740662095</div>
        </div>
      </PopoverContent>
    </Popover> */}

      <a href="images/Tharusha-Dilshan.pdf" target="_blank" className='button'>
        <ImProfile/>
      </a>

      <a href="mailto:tharushadil11@gmail.com" className='button'>
        <FaEnvelope />
      </a>
      <a href="https://github.com/TharU0418" className='button' target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/tharusha-dilshan0418/" className='button' target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
