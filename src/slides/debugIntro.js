import React from 'react';
import Note from '../components/revealComponents/note';
import debuggerImg from '../img/debugger.png';

export default function DebugIntro() {
  return (
    <section>
      <section data-auto-animate>
        <h2>Can we do better?</h2>
        <Note>
          <ul>
            <li>Can we do better?</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Can we do better?</h2>
        <p>Here&apos;s our progress.</p>
        <img
          src={debuggerImg}
          alt="A screenshot of the new debugger interface"
        />
        <Note>
          <ul>
            <li>Well, we&apos;re certainly trying.</li>
            <li>
              Over the past year, I&apos;ve built a bespoke interface for
              debugging verification in VSCode, while upgrading Gillian to keep
              up.
            </li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
