import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-cognac text-ivory font-body selection:bg-gold selection:text-forest">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
