import React from 'react';

const PersonalInfo = () => {
  const name = () => {
    const nameCss = {
      display: 'block',
      fontSize: '1.5625rem',
      color: '#FFF',
      paddingTop: '1.3125rem',
      fontWeight: '700',
      marginBottom: '0.125rem',
      lineHeight: '1.8913rem',
    }
    return (
      <span style={nameCss}>Khodidas Chauhan</span>
    )
  }

  const designation = () => {
    const designationCss = {
      display: 'block',
      fontWeight: '400',
      fontSize: '0.8rem',
      color: '#F3BF99',
      lineHeight: '0.9681rem',
      marginBottom: '0rem'
    }

    return (
      <span style={designationCss}>
        Software Engineer
      </span>
    )
  }

  const website = () => {
    const websiteCss = {
      fontWeight: '400',
      fontSize: '0.64rem',
      color: '#F5F5F5',
      textAlign: 'center',
      lineHeight: '0.9681rem',
    }
    return (
      <span style={websiteCss}>
        khodidaschauhan.com
      </span>
    )
  }

  const personalInfoCss = {
    textAlign: 'center',
    marginBottom: '0.625rem'
  }
  
  return (
    <div style={personalInfoCss}>
      {name()}
      {designation()}
      {website()}
    </div>
  );
}
 
export default PersonalInfo;