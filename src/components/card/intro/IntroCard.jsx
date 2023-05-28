import React from 'react';

import './introCardStyle.css';

import workingImg from '../../../assests/img/illustration-working.svg';

const IntroCard = () => {
  return (
    <div className='introCard-cnt'>
      <div className='introCard-txt-cnt'>
        <h1 className='introCard-header'>More than just shorter links</h1>
        <p className='introCard-para'>
          Get Started Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <div className='introCard-btn-cnt'>
          <button className='introCard-btn'>Get Started</button>
        </div>
      </div>
      <div className='introCard-img-cnt'>
        <img className='introCard-img' src={workingImg} alt='a man working' />
      </div>
    </div>
  );
};

export default IntroCard;
