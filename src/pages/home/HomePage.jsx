import React from 'react';

import './homeStyle.css';

import Nav from '../../components/nav/Nav';
import IntroCard from '../../components/card/intro/IntroCard';
import FormCnt from '../../components/formCnt/FormCnt';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <IntroCard />
      <FormCnt />
    </div>
  );
};

export default HomePage;
