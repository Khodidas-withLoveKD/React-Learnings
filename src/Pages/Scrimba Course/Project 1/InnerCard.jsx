import React from 'react';

import About from './About';
import DP from './DP';

const InnerCard = () => {
  const cardCss = {
    width: '19.8125rem',
    height: '48.75rem',
    // backgroundColor: 'pink',
    borderRadius: '0.625rem',
    fontFamily: 'Inter, sans-serif',
  }
  return (
    <div style={cardCss}>
      <DP />
      <About />
    </div>
  );
}

export default InnerCard;