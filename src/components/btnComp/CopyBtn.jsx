import React, { useState } from 'react';

import './copyStyle.css';

const CopyBtn = ({ text }) => {
  const [isCopy, setIsCopy] = useState(false);

  const copyFunction = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className='copy-btn'
        onClick={() => {
          copyFunction();
        }}
      >
        {!isCopy ? <span>Copy</span> : <span>Copied!</span>}
      </button>
    </div>
  );
};

export default CopyBtn;
