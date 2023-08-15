import React from 'react';
import logo from '../img/logo_light.svg';

import bgImg from '../img/title-bg.png';

export default function titleSlide() {
  return (
    <section
      className="title"
      data-background-image={bgImg}
      data-background-opacity="0.5"
    >
      <img className="logo" src={logo} alt="Gillian logo" />
      <p>Debugging</p>
    </section>
  );
}
