import React from 'react';

import DPImage from './Resources/DP.jpg'

const DP = () => {
  const dpCss = {
    height: '19.8125em',
    width: '19.8125rem',
    borderRadius: '0.625rem 0.625rem 0 0'
  }
  return (
    <div>
      <img src={DPImage}
        alt="Khodidas's leaning with his arms wide open looking at you with a big smile"
        style={dpCss}
      />
    </div>
  );
}
 
export default DP;