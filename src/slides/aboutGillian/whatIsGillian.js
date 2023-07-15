import React from 'react';
import Note from '../../components/revealComponents/note';

export default function WhatIsGillian() {
  return (
    <section className="what-is-gillian">
      <section data-auto-animate>
        <p>Gillian is a</p>
        <p>symbolic execution engine.</p>

        <Note>For the uninitiated, Gillian is a symbolic execution engine</Note>
      </section>
      <section data-auto-animate>
        <p>Gillian is a</p>
        <p>
          <em>compositional</em>
        </p>
        <p>symbolic execution engine.</p>

        <Note>
          It&apos;s compositional, meaning functions can be analysed
          individually
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian is a</p>
        <p>
          <em>compositional</em>
        </p>
        <p>
          <em>parametric</em>
        </p>
        <p>symbolic execution engine.</p>

        <Note>It&apos;s parametric across source languages</Note>
      </section>
      <section data-auto-animate>
        <p>Gillian is a</p>
        <p>
          <em>compositional</em>
        </p>
        <p>
          <em>parametric</em>
        </p>
        <p>symbolic execution engine.</p>
        <p>&nbsp;</p>
        <p>
          <em>...for testing and verification.</em>
        </p>

        <Note>And it tests and verifies programs</Note>
      </section>
    </section>
  );
}
