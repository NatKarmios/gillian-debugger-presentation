import React from 'react';
import Note from '../components/revealComponents/note';

export default function ExecModes() {
  return (
    <section className="exec-modes">
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <Note>
          <ul>
            <li>Gillian has 3 main execution modes</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
        </ul>
        <Note>
          <ul>
            <li>Symbolic execution, for running user-defined tests</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
          <li>compositional verification</li>
        </ul>
        <Note>
          <ul>
            <li>
              Compositional verification, using function specifications, loop
              invariants, etc.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
          <li>compositional verification</li>
          <li>automated testing via bi-abduction</li>
        </ul>
        <Note>
          <ul>
            <li>And automated testing with bi-abduction</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>plain symbolic execution</li>
          <li>compositional verification</li>
          <p className="note">&#x2BA4; we started here</p>
          <li>automated testing via bi-abduction</li>
        </ul>
        <Note>
          <ul>
            <li>We started out with just verification debugging...</li>
          </ul>
        </Note>
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
          <ul>
            <li>...and just recently added support for symbolic debugging.</li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
