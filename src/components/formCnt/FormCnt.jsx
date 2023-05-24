import React, { useState } from 'react';
import axios from 'axios';

import './formStyle.css';

const FormCnt = () => {
  const [data, setData] = useState({ url: '' });

  const handleSubmit = async () => {
    try {
      if (data) {
        axios
          .get(`https://api.shrtco.de/v2/shorten?url=${data.url}`)
          .then((res) => {
            console.log(res);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [data.url]: e.target.value });
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
            handleSubmit();
          }}
        >
          <input
            className='input-field'
            onChange={(e) => {
              handleChange(e);
            }}
            type='url'
            placeholder='Shorten a link here...'
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
