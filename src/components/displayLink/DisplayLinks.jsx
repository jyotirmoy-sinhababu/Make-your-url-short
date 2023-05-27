import React from 'react';

import CopyBtn from '../btnComp/CopyBtn';

import './displayStyle.css';

const DisplayLinks = ({ data }) => {
  return (
    <div className='display-cnt'>
      {' '}
      <div className='display-first-cnt'>
        <p className='display-url'>{data.original_link}</p>
      </div>
      <div className='display-second-cnt'>
        <p className='display-url'>{data.full_short_link}</p>
        <CopyBtn text={data.full_short_link} />
      </div>
    </div>
  );
};

export default DisplayLinks;
