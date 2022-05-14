import React from 'react';

const ProfessionalHandles = () => {
  const proHandlesCss = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const boxCss = {
    height: '2.125rem',
    width: '7.1875rem',
    borderRadius: '0.375rem',
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
    const emailCss = {
      ...boxCss,
      backgroundColor: '#FFF',
      marginRight: '1.0625rem',
      border: '0.0625rem solid #D1D5DB',
    }
    return (
      <div style={emailCss}>
        <div style={spacingCss}>
          <i style={iconSpacingCss} class="fa-solid fa-envelope"></i>
          Email
        </div>
      </div>
    )
  }

  const linkedIn = () => {
    const linkedInCss = {
      ...boxCss,
      backgroundColor: '#5093E2',
    }
    return (
      <div style={linkedInCss}>
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