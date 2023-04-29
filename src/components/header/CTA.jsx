import React from 'react';
import CV from '../../assets/cv-DiegoDominguez.pdf';
import CVE from '../../assets/cv_DiegoDominguez.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CVE} download className="btn">
        Download CV Eng.
      </a>
      <a href={CV} download className="btn">
        Download CV Esp.
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
