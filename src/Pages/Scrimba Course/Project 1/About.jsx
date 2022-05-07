import React from 'react';

import PersonalInfo from './PersonalInfo';
import ProfessionalHandles from './ProfessionalHandles';

const About = () => {

  const aboutCss = {
    backgroundColor: '#1A1B21',
    height: '24.9375rem',
    // textAlign: 'center',
  }
  
  return (
    <div style={aboutCss}>
      <PersonalInfo />
      <ProfessionalHandles />
    </div>
  );
}
 
export default About;