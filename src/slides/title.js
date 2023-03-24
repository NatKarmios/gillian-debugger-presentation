import React from 'react';
import logo from '../img/logo_light.svg';

export default function titleSlide() {
  return (
    <section className="title">
      <img src={logo} alt="Gillian logo" />
      <p>Debugging</p>
    </section>
  );
}
