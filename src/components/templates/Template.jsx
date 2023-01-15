import React from 'react';
import Footer from 'components/footer/Footer';
import Nav from 'components/nav/Nav';
import Sidebar from 'components/sidebar/Sidebar';

const Template = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <Sidebar />
    </>
  );
};

export default Template;
