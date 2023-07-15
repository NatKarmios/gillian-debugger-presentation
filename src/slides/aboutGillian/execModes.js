import React from 'react';
import Note from '../../components/revealComponents/note';

export default function ExecModes() {
  return (
    <section className="exec-modes">
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <Note>Gillian has 3 main execution modes.</Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
        </ul>
        <Note>Symbolic execution, for running user-defined tests</Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
          <li>compositional verification</li>
        </ul>
        <Note>
          Compositional verification, using function specs, loop invariants,
          etc.
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
          <li>compositional verification</li>
          <li>automated testing via bi-abduction</li>
        </ul>
        <Note>And automated testing with bi-abduction</Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
          <li>compositional verification</li>
          <p className="note">&#x2BA4; we started here</p>
          <li>automated testing via bi-abduction</li>
        </ul>
        <Note>We started out with just verification debugging...</Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
          <p className="note" style={{ color: '#e9494b' }}>
            &#x2BA4; fresh out the oven!
          </p>
          <li>compositional verification</li>
          <p className="note">&#x2BA4; we started here</p>
          <li>automated testing via bi-abduction</li>
        </ul>
        <Note>
          ...and just recently added support for regular symbolic debugging.
        </Note>
      </section>
    </section>
  );
}
