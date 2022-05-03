import React from 'react';

const About = () => {
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

  const aboutCss = {
    backgroundColor: '#1A1B21',
    height: '24.9375rem',
    textAlign: 'center',
  }
  
  return (
    <div style={aboutCss}>
      {name()}
      {designation()}
      {website()}
    </div>
  );
}
 
export default About;