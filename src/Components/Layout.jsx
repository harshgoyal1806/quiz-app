import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Outlet /> 
      </div>
    </>
  );
};

export default Layout;
