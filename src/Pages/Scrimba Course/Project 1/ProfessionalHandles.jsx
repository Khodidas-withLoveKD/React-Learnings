import React from 'react';

const ProfessionalHandles = () => {
  const proHandlesCss = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  const boxCss = {
    height: '2.125rem',
    width: '7.1875rem',
    borderRadius: '0.375rem',
    backgroundColor: 'pink',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  }

  const spacingCss = {
    margin: '0 auto',
  }

  const iconSpacingCss = {
    marginRight: '0.5625rem',
  }

  const email = () => {
    return (
      <div style={boxCss}>
        <div style={spacingCss}>
          <i style={iconSpacingCss} class="fa-solid fa-envelope"></i>
          Email
        </div>
      </div>
    )
  }

  const linkedIn = () => {
    return (
      <div style={boxCss}>
        <div style={spacingCss}>
          <i style={iconSpacingCss} class="fa-brands fa-linkedin"></i>
          LinkedIn
        </div>
      </div>
    )
  }

  return (
    <div style={proHandlesCss}>
      {email()}
      {linkedIn()}
    </div>
    );
}
 
export default ProfessionalHandles;