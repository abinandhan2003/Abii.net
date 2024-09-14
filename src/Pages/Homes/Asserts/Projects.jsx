import React, { useRef } from 'react';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './Logo.svg';
import Agames from '../Asserts/Projects/agames.webp';
import Skyweb from '../Asserts/Projects/skyweb.webp';
import Darkhub from '../Asserts/Projects/darkhub.webp';
import Weather from '../Asserts/Projects/weather.webp';
import './Project.css';
import Mouse from './Projects/cursor.svg';

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the value based on your preference
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the value based on your preference
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id='project' className='w-full h-[100vh] flex justify-center items-center'>
      <div className='md:w-[60%] w-[90%] flex flex-col flex-wrap md:flex-nowrap justify-center gap-10 items-center'>
        <div className='md:h-[250px] h-auto flex flex-col md:flex-row items-start'>
          <div className='flex justify-center md:justify-start w-full md:w-auto'>
            <img src={Logo} alt="Logo" className='h-full max-h-[100px] md:max-h-none' />
          </div>
          <div className='mt-4 md:mt-8 md:ml-8 flex flex-col gap-2 text-center md:text-left'>
            <p className='text-2xl relative'>
              MY PROJECT
              <img src={Mouse} alt="mouse_svg" className='inline-block ml-4 md:absolute md:ml-0 md:ml-44 hover:rotate-180 transition-all duration-700' data-aos="fade-up-left" />
            </p>
            <p>Hi.</p>
            <p>Welcome to my projects</p>
            <p>Almost all my projects tend to be simple, with minimal design & typography. You can click on my project for more details</p>
          </div>
        </div>

        {/* Project images with arrow buttons */}
        <div className='relative w-full flex items-center'>
          <button onClick={scrollLeft} className='absolute left-0 z-10 translate-x-[-1rem] md:translate-x-[-3rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-pulse border-0 scale-125 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </button>
          <div className='scroll-container overflow-x-scroll scrollbar-hide flex gap-5 w-full' ref={scrollContainerRef}>
            <div className='scroll-content flex gap-10'>
              <div className='relative w-72 md:w-96 shadow-md' data-aos="fade-left" data-aos-duration="1500">
                <img src={Skyweb} alt="skyweb.netlify.app" className='w-full' />
                <div className='text-center mt-3'> Skyweb </div>
                <a href="https://skywebs.netlify.app/" target="_blank" rel="noopener noreferrer" className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity'>
                  Visit
                </a>
              </div>
              <div className='relative w-72 md:w-96 shadow-md' data-aos="fade-left" data-aos-duration="1500">
                <img src={Agames} alt="agames.netlify.app" className='w-full' />
                <div className='text-center mt-3'> Agames </div>
                <a href="https://a-games.netlify.app/" target="_blank" rel="noopener noreferrer" className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity'>
                  Visit
                </a>
              </div>
              <div className='relative w-72 md:w-96 shadow-md' data-aos="fade-left" data-aos-duration="1500">
                <img src={Darkhub} alt="darkhub.netlify.app" className='w-full' />
                <div className='text-center mt-3'> Darkhub </div>
                <a href="https://darkhubs.netlify.app/" target="_blank" rel="noopener noreferrer" className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity'>
                  Visit
                </a>
              </div>
              <div className='relative w-72 md:w-96 shadow-md' data-aos="fade-left" data-aos-duration="1500">
                <img src={Weather} alt="darkhub.netlify.app" className='w-full' />
                <div className='text-center mt-3'> Weather APP </div>
                <a href="https://abi-weather.netlify.app/" target="_blank" rel="noopener noreferrer" className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity'>
                  Visit
                </a>
              </div>
            </div>
          </div>
          <button onClick={scrollRight} className='absolute right-0 z-10 translate-x-[1rem] md:translate-x-[3rem]' data-aos="fade-left" data-aos-duration="1500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-pulse border-0 scale-125 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
