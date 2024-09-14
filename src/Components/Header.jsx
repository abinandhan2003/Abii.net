import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className='w-full flex-wrap flex justify-between items-center px-4 py-2'>
      <div className='text-lg text-black hover:font-bold bg-white transition-all duration-500'>Abi Nandhan</div>

      <div className='md:hidden' id='swap'>
        <Link to={location.pathname === '/resume' ? '/' : '/resume'}>
          {location.pathname === '/resume' ? 'Home' : 'Resume'}
        </Link>
      </div>

      <div className='hidden md:flex gap-5'>
        {/* Button items */}
        <a href="/" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
          <div>Home</div>
        </a>
        <a href="/#about" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
          <div>About</div>
        </a>
        <a href="/#project" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
          <div>Project</div>
        </a>
        <a href="/#skills" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
          <div>Skills</div>
        </a>
        <a href="/resume" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
          <div>Resume</div>
        </a>
        <a href="/#contact" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
          <div>Contact</div>
        </a>
      </div>
    </div>
  );
}

export default Header;
