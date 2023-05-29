import React from 'react';

const AboutAndInterests = () => {

  const headingCss = {
    fontWeight: '700',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: '#F5F5F5',
  }
  
  const bodyCss = {
    fontWeight: '400',
    fontSize: '0.64rem',
    lineHeight: '0.96rem',
    color: '#DCDCDC',
  }

  const about = () => {
    return (
      <div>
        <div style={headingCss}>
          About
        </div>
        <div style={bodyCss}>
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
        </div>
      </div>
    )
  }

  const interests = () => {
    const interestsCss = {
      marginTop: '0.8125rem',
    }
    return (
      <div style={interestsCss}>
        <div style={headingCss}>
          Interests
        </div>
        <div style={bodyCss}>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </div>
      </div>
    )
  }

  const aboutAndInterestsCss = {
    marginTop: '1.875rem',
  }

  return ( 
    <div style={aboutAndInterestsCss}>
      {about()}
      {interests()}
    </div>
   );
}
 
export default AboutAndInterests;