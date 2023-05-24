import React from 'react';

import './homeStyle.css';

import Nav from '../../components/nav/Nav';
import IntroCard from '../../components/card/intro/IntroCard';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <IntroCard />
    </div>
  );
};

export default HomePage;
