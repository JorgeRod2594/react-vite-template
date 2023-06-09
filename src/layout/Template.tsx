import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Template() {
  return (
    <div>
      <Header />
      <section id="main">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
export default Template;
