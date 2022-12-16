import React from 'react';

import About from './About';
import DP from './DP';
import SocialHandles from './SocialHandles';

const InnerCard = () => {
  const cardCss = {
    width: '19.8125rem',
    fontFamily: 'Inter, sans-serif',
  }
  return (
    <div style={cardCss}>
      <DP />
      <About />
      <SocialHandles />
    </div>
  );
}

export default InnerCard;