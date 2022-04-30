import React from 'react';

const About = () => {
  const centerItem = {
    // marginLeft: 'auto',
    // marginRight: 'auto',
    textAlign: 'center'
  }
  const name = () => {
    const nameCss = {
      ...centerItem,
      fontSize: '1.5625rem',
      color: '#FFF',
      paddingTop: '1.3125rem',
      fontWeight: '700'
    }
    return (
      <p style={nameCss}>Khodidas Chauhan</p>
    )
  }

  const designation = () => {
    const designationCss = {
      fontWeight: '400',
      fontSize: '0.8rem',
      color: '#F3BF99',
    }

    return (
      <p style={designationCss}>
        Software Engineer
      </p>
    )
  }

  const aboutCss = {
    backgroundColor: '#1A1B21',
    height: '24.9375rem',
    // width: '19.8125rem',
  }

  return (
    <div style={aboutCss}>
      {name()}
      {designation()}
    </div>
  );
}
 
export default About;