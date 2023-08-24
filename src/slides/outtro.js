import React from 'react';
import GitHubLogo from '../img/github-logo.png';

export default function Outtro() {
  return (
    <section className="outtro">
      <h2>Thank you!</h2>
      <p>
        <em>
          <gh-logo style={{ '--gh-logo-src': `url("${GitHubLogo}")` }} />
          GillianPlatform/Gillian
        </em>
      </p>
      <p>
        <em>
          <und>nat.karmios.com</und>
          &nbsp;for contact &amp; more info
        </em>
      </p>
    </section>
  );
}
