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
          <li>user-defined symbolic testing</li>
        </ul>
        <Note>
          <ul>
            <li>Running user-defined symbolic tests</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>user-defined symbolic testing</li>
          <li>compositional verification</li>
        </ul>
        <Note>
          <ul>
            <li>
              Compositional verification, using pre- and post-conditions, loop
              invariants, etc.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian performs:</p>
        <ul>
          <li>user-defined symbolic testing</li>
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
          <li>user-defined symbolic testing</li>
          <li>compositional verification</li>
          <em data-id="em1" style={{ fontSize: '0.8em' }}>
            &#x2BA4; we started here
          </em>
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
          <li>user-defined symbolic testing</li>
          <em style={{ fontSize: '0.8em', color: '#e9494b' }}>
            &#x2BA4; fresh out the oven!
          </em>
          <li>compositional verification</li>
          <em data-id="em1" style={{ fontSize: '0.8em' }}>
            &#x2BA4; we started here
          </em>
          <li>automated testing via bi-abduction</li>
        </ul>
        <Note>
          <ul>
            <li>...and just recently added support for symbolic testing.</li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
