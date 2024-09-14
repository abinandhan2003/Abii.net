import React, { useState, useEffect } from 'react';
import logo from './Logo.svg';
// import Arrow from './Hero/undraw_fun-arrow.svg';
// import Underline from './Hero/undraw_fun-underline.svg';

function Hero() {
  const [scale, setScale] = useState(1);
  const [isFixed, setIsFixed] = useState(false);
  const [visibility, setVisibility] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(1 - scrollY / 500, 0.5); // Shrink but don't let it go smaller than 50%
      setScale(newScale);

      if (scrollY > 200) { // Adjust this value as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      const newVisibility = Math.max(1 - scrollY / 200, 0); // Adjust this value as needed
      setVisibility(newVisibility);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full h-[100vh] flex flex-col justify-center mt-20 items-center text-center'>
      <img className='z-50'
        src={logo}
        alt="Logo"
        style={{
          transform: `scale(${scale})`,
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? '10px' : 'auto',
          left: isFixed ? '50%' : 'auto',
          transform: isFixed ? 'translateY(-47%) translateX(-50%) scale(0.1)' : `scale(${scale})`,
          transition: 'transform 0.2s, top 0.2s, left 0.2s'
        }}
      />

      {/* <img 
        src={Arrow} 
        alt="arrow" 
        className='absolute -translate-x-72 translate-y-28 rotate-180 scale-150' 
        style={{
          opacity: visibility,
          transition: 'opacity 0.2s'
        }}
      />
      <img 
        src={Underline} 
        alt="underline" 
        className='absolute bottom-14 right-[33rem] scale-x-[300%] scale-y-[200%]'
        style={{
          opacity: visibility,
          transition: 'opacity 0.2s'
        }}
      /> */}

      <p
        className='md:text-5xl text-3xl -translate-y-10 text-gray-600 mb-32'
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.2s'
        }}
      >
        Explore inside my portfolio and see where <br /> creativity meets passion.
      </p>

      <div className='flex gap-5 justify-center items-center -translate-y-28'>
        <div className='animate-bounce'>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"></path>
          </svg>
        </div>
        <p className='text-gray-600'>SCROLL DOWN</p>
      </div>
    </div>
  );
}

export default Hero;
