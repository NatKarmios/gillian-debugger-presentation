import React from 'react';
import Note from '../components/revealComponents/note';
import debuggerImg from '../img/debugger-light.png';

export default function DebugIntro() {
  return (
    <section>
      <section data-auto-animate>
        <h2>Can we do better?</h2>
        <Note>Have things improved?</Note>
      </section>
      <section data-auto-animate>
        <h2>Can we do better?</h2>
        <p>Working on it!</p>
        <img
          src={debuggerImg}
          alt="A screenshot of the new debugger interface"
        />
        <Note>
          <ul>
            <li>Well, it&apos;s on its way.</li>
            <li>
              My work introduced a bespoke interface for debugging verification
              in VSCode, while upgrading Gillian to keep up.
            </li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
