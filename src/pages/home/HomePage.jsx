import React from 'react';

import './homeStyle.css';

import Nav from '../../components/nav/Nav';
import IntroCard from '../../components/card/intro/IntroCard';
import FormCnt from '../../components/formCnt/FormCnt';
import AdvanceStatistic from '../../components/card/staticCard/AdvanceStatistic';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <IntroCard />
      <FormCnt />
      <AdvanceStatistic />
    </div>
  );
};

export default HomePage;
