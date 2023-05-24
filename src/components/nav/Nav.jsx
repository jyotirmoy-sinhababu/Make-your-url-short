import React from 'react';

import './navStyle.css';

const Nav = () => {
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
      <div className='nav-auth-cnt'>
        <button className='nav-logIn-btn'>Login</button>
        <button className='nav-signUp-btn'>Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
