import React from 'react';

import Card from './InnerCard'

const DigitalBusinessCard = () => {
  const container = {
    width: '34.375rem',
    height: '54.25rem',
    backgroundColor: '#23252C',
    margin: 'auto',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  }
  
  console.log('kd container:', container)
  // TODO: make theme changeable
  return (
      <div style={container}>
        <Card />
      </div>
   );
}
 
export default DigitalBusinessCard;