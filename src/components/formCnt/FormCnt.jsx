import React, { useState } from 'react';

import './formStyle.css';

const FormCnt = () => {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  return (
    <div className='frm-cnt'>
      {' '}
      <div className='sub-frm-cnt'>
        {' '}
        <form
          className='from'
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className='input-field'
            onChange={(e) => {
              handleChange();
            }}
            type='url'
            placeholder='write your url'
          />
          <button className='frm-btn' type='submit'>
            Shorten it!
          </button>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default FormCnt;
