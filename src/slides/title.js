import React from 'react';
import logo from '../img/logo_light.svg';

import debuggerImg from '../img/debugger-light.png';

export default function titleSlide() {
  return (
    <section className="title">
      <img className="logo" src={logo} alt="Gillian logo" />
      <p>Debugging</p>
      <br />
      {/* TODO: background image? */}
      <img
        src={debuggerImg}
        className="screenshot"
        alt="Gillian's debugger interface"
      />
    </section>
  );
}
