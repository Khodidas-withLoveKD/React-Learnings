import React from 'react';

import AboutAndInterests from './AboutAndInterests';
import PersonalInfo from './PersonalInfo';
import ProfessionalHandles from './ProfessionalHandles';

const About = () => {

  const aboutCss = {
    backgroundColor: '#1A1B21',
    height: '24.9375rem',
    paddingLeft: '2.1875rem',
    paddingRight: '2.1875rem',
  }
  
  return (
    <div style={aboutCss}>
      <PersonalInfo />
      <ProfessionalHandles />
      <AboutAndInterests />
    </div>
  );
}
 
export default About;