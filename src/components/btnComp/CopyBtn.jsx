import React, { useState } from 'react';

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
