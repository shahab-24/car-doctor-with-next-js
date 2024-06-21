import React from 'react';
import Banner from '../Homepage/Banner'
import About from './About';
import Services from './Services';

const Homepage = () => {
  return (
    <div className=''>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    </div>
  );
};

export default Homepage;