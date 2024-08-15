import React from 'react';
import s from './Layout.module.css';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
