import React, { useState } from 'react';

import './navStyle.css';

const Nav = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const navBtn = () => {
    setIsMobileView(true);
  };

  return (
    <div className='nav-cnt'>
      <div className='nav-first-part'>
        <h2 className='nav-heading'>Shortly</h2>

        <div className='nav-first-btn-cnt'>
          <button className='nav-btn'>Features</button>
          <button className='nav-btn'>Pricing</button>
          <button className='nav-btn'>Resources</button>
        </div>
      </div>
      {isMobileView ? (
        <div className='nav-mobile-cnt'>
          <div className='nav-mobile-first'>
            <button>Features</button>
            <button>Pricing</button>
            <button>Resources</button>
          </div>
          <div className='nav-mobile-second'>
            <button>LogIn</button>
            <button>Sign Up</button>
          </div>
        </div>
      ) : null}
      <div className='nav-mobileView'>
        <button
          onClick={() => {
            navBtn();
          }}
          className='mobile-view-btn'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            class='bi bi-three-dots-vertical'
            viewBox='0 0 16 16'
          >
            <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
          </svg>
        </button>
      </div>
      <div className='nav-auth-cnt'>
        <button className='nav-logIn-btn'>Login</button>
        <button className='nav-signUp-btn'>Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
