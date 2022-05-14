import React from 'react';

const SocialHandles = () => {
  const socialHandlesCss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '19.8125rem',
    height: '4.3125rem',
    backgroundColor: '#161619',
    borderRadius: '0 0 0.625rem 0.625rem'
  }
  
  const iconColorCss = {
    color: '#918E9B'
  }
  const iconCss = {
    marginRight: '1.5rem',
    ...iconColorCss
  }

  return (
    <div style={socialHandlesCss}>
      <i style={iconCss} class="fa-2x fa-brands fa-twitter-square"></i>
      <i style={iconCss} class="fa-2x fa-brands fa-facebook-square"></i>
      <i style={iconCss} class="fa-2x fa-brands fa-instagram-square"></i>
      <i style={iconColorCss} class="fa-2x fa-brands fa-github-square"></i>
    </div>
   );
}
 
export default SocialHandles;