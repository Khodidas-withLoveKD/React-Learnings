import React from 'react';

import DP from './DP';

const InnerCard = () => {
  const cardCss = {
    width: '19.8125rem',
    height: '48.75rem',
    backgroundColor: 'pink',
    borderRadius: '0.625rem'
  }
  return (
    <div style={cardCss}>
      <DP />
    </div>
  );
}

export default InnerCard;