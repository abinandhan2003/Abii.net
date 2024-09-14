import React from 'react';
import Header from '../Components/Header';
import './Layout.css';
import Home from '../Pages/Homes/Home';
import { Outlet } from 'react-router-dom';
import Resume from '../Pages/Resume/Resume';


function Layout() {
  return (
    <div id='font' className='bg-white'>

      <div className='fixed top-0 w-full bg-white z-50'>
        <Header />
      </div>
      
      <Outlet />

 
    </div>
  );
}

export default Layout;
