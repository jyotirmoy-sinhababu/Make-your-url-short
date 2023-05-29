import React, { useState } from 'react';
import axios from 'axios';

import './formStyle.css';

import DisplayLinks from '../displayLink/DisplayLinks';

const FormCnt = () => {
  const [inputData, setInputData] = useState('');
  const [apiData, setApiData] = useState([]);
  const [err, setErr] = useState('');

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    if (inputData.length) {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${inputData}`)
        .then((res) => {
          const newData = { ...res.data.result, id: idGenerator() };
          setApiData([...apiData, newData]);
        });
    } else setErr('This field is required');
  };
  const idGenerator = () => {
    return Math.floor(Math.random() * 100000);
  };
  return (
    <div className='frm-cnt'>
      {' '}
      <div className='sub-frm-cnt'>
        {' '}
        <form
          className='from'
          onSubmit={(e) => {
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
            required
          />
          <button className='frm-btn' type='submit'>
            Shorten it!
          </button>
        </form>
      </div>
      <div>{!err ? <p>{err}</p> : null}</div>
      <div className='form-dis-cnt'>
        {apiData.length
          ? apiData.map((item) => {
              return (
                <div key={item.id}>
                  <DisplayLinks data={item} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default FormCnt;
