import React from 'react';
import Note from '../components/revealComponents/note';

export default function AboutGillian() {
  return (
    <section className="about-gillian">
      <section data-auto-animate>
        <p>Gillian is a</p>
        <p>symbolic execution engine.</p>

        <Note>
          <ul>
            <li>For the uninitiated, Gillian is a symbolic execution engine</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <p>Gillian is a</p>
        <p>
          <em>compositional</em>
        </p>
        <p>symbolic execution engine.</p>

        <Note>
          <ul>
            <li>
              It&apos;s compositional, meaning functions can be analysed
              individually
            </li>
          </ul>
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

        <Note>
          <ul>
            <li>It&apos;s parametric across source languages</li>
          </ul>
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
        <p>&nbsp;</p>
        <p>
          <em>...for testing and verification.</em>
        </p>

        <Note>
          <ul>
            <li>And it tests and verifies programs</li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
