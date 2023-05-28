import React from 'react';

import './cardStyle.css';

const Card = ({ img, header, para }) => {
  return (
    <div className='card-cnt'>
      <div className='card-main-img-cnt'>
        <div className='card-img-cnt'>
          <img className='card-logo' src={img} alt='card-logo' />
        </div>
      </div>
      <h3 className='card-header'>{header}</h3>
      <p className='card-para'>{para}</p>
    </div>
  );
};

export default Card;
