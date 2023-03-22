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
            <li>For the uninitiated, Gillian is a symbolic execution engine</li>
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
            <li>For the uninitiated, Gillian is a symbolic execution engine</li>
            <li>
              It&apos;s compositional, meaning functions can be analysed
              individually
            </li>
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
          <em>...for testing, verification and analysis.</em>
        </p>

        <Note>
          <ul>
            <li>For the uninitiated, Gillian is a symbolic execution engine</li>
            <li>
              It&apos;s compositional, meaning functions can be analysed
              individually
            </li>
            <li>It&apos;s parametric across source languages</li>
            <li>And it tests, verifies, and analyses programs</li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
