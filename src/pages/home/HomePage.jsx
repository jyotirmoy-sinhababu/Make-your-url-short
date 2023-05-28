import React from 'react';

import './homeStyle.css';
import brand from '../../assests/img/icon-brand-recognition.svg';
import detailed from '../../assests/img/icon-detailed-records.svg';
import fully from '../../assests/img/icon-fully-customizable.svg';

import Nav from '../../components/nav/Nav';
import IntroCard from '../../components/card/intro/IntroCard';
import Card from '../../components/card/cardComp/Card';
import FormCnt from '../../components/formCnt/FormCnt';
import AdvanceStatistic from '../../components/card/staticCard/AdvanceStatistic';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <IntroCard />
      <FormCnt />
      <AdvanceStatistic />
      <div className='main-home-card-cnt'>
        <div className='small-card-cnt'>
          <Card
            img={brand}
            header={'Brand Recognition'}
            para={
              'Boost your brand recognition with each click. Generic links don"t  mean a thing. Branded links help instil confidence in your content. '
            }
          />
        </div>
        <div className='card-empt-cnt'></div>
        <div className='small-card-cnt'>
          <Card
            img={detailed}
            header={'Detailed Records'}
            para={
              ' Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. '
            }
          />
        </div>
        <div className='card-empt-cnt'></div>
        <div className='small-card-cnt'>
          <Card
            img={fully}
            header={' Fully Customizable'}
            para={
              ' Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. '
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
