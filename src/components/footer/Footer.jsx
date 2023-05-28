import React from 'react';

import './footerStyle.css';

const Footer = () => {
  return (
    <div className='footer-cnt'>
      <div>
        <h2 className='header'>Shortly</h2>
      </div>
      <div>
        <h4 className='header'>Features</h4>
        <p className='para'>Link Shortening </p>
        <p className='para'>Branded Links</p>
        <p className='para'>Analytics</p>
      </div>
      <div>
        <h4 className='header'>Resources</h4>
        <p className='para'>Blog</p>
        <p className='para'>Developers</p>
        <p className='para'>Support</p>
      </div>
      <div>
        <h4 className='header'>Company</h4>
        <p className='para'>About</p>
        <p className='para'>Our team</p>
        <p className='para'>Careers</p>
        <p className='para'>Footers</p>
      </div>
      <div>
        <p className='para creator'>
          Created by- Jyotirmoy @frontend Mentor challenges
        </p>
      </div>
    </div>
  );
};

export default Footer;
