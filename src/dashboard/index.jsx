import React from 'react';
import Header from 'layout/header';
import LivePreviewExample from 'layout/abour';
import Kads from 'layout/kads';
import Getintouch from 'layout/getintouch';
import Portfolio from 'layout/portfolio';
import Carosel from 'layout/carosel';
import Why from 'layout/whychoose';
import Testimonial from 'layout/testimonial';
import Count from 'layout/count';
import Faq from 'layout/faq';
import Partners from 'layout/partners';
import Timeline from 'layout/timeline';
import Footer from 'layout/footer';
import Mission from 'layout/mission';
import Core from 'layout/core';
// import Slideshow from 'layout/slideshow';
import Search from 'layout/search';
import style from 'layout/style.css';

import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const Dashboard = () => {
  return (
    <>
    <div className='back'>
      <Header />
      <LivePreviewExample />
      <Mission />
      {/* <Core /> */}
      <Kads />
      {/* <Count /> */}
      <Portfolio />
      <Carosel />
      <ScrollUpButton className='scroll' />
      <Why />
      {/* <Faq /> */} 
      <Partners />
      <Getintouch />
      <Footer />
      {/* <Slideshow /> */}
      </div>
    </>
  );
};
export default Dashboard;
