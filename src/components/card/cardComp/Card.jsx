import React from 'react';

import './cardStyle.css';

const Card = ({ img, header, para }) => {
  return (
    <div className='card-cnt'>
      <div className='card-img-cnt'>
        <img className='card-logo' src={img} alt='card-logo' />
      </div>
      <h3>{header}</h3>
      <p>{para}</p>
    </div>
  );
};

export default Card;
