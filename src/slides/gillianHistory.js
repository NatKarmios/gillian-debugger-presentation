import React from 'react';
import Note from '../components/revealComponents/note';

import gillianCredits from '../img/gillian-credits-placeholder.png';

export default function GillianHistory() {
  return (
    <section className="gillian-history">
      <section>
        <p>Gillian was made by</p>
        <img
          width="500px"
          src={gillianCredits}
          alt="Some of the people behind Gillian"
        />
        <p>...and others</p>
        <Note>
          The research and engineering behind Gillian was performed by a whole
          bunch of people, including these faces here.
        </Note>
      </section>
      <section data-auto-animate>
        <h3>Towards debugging</h3>
        <p className="subtitle">A series of MSc projects</p>
        <Note>
          The debugging aspect of Gillian is the result of multiple
          masters&apos; projects
        </Note>
      </section>
      <section data-auto-animate>
        <h3>Towards debugging</h3>
        <p className="subtitle">A series of MSc projects</p>
        <ul>
          <li>
            2020: Radu Lacraru&nbsp;
            <em>- logging for execution traces</em>
          </li>
        </ul>
        <Note>
          In 2020, Radu Lacraru introduced logging for execution traces
        </Note>
      </section>
      <section data-auto-animate>
        <h3>Towards debugging</h3>
        <p className="subtitle">A series of MSc projects</p>
        <ul>
          <li>
            2020: Radu Lacraru&nbsp;
            <em>- logging for execution traces</em>
          </li>
          <li>
            2021: Matthew Ho&nbsp;
            <em>- first debugger attempt, DAP-compliant</em>
          </li>
        </ul>
        <Note>
          In 2021, Matthew Ho built the first implementation of the debugger,
          working within the bounds of Microsoft&apos;s Debug Adapter Protocol.
        </Note>
      </section>
      <section data-auto-animate>
        <h3>Towards debugging</h3>
        <p className="subtitle">A series of MSc projects</p>
        <ul>
          <li>
            2020: Radu Lacraru&nbsp;
            <em>- logging for execution traces</em>
          </li>
          <li>
            2021: Matthew Ho&nbsp;
            <em>- first debugger attempt, DAP-compliant</em>
          </li>
          <li>
            2022: Nat Karmios (me!)&nbsp;
            <em>- a bespoke interface</em>
          </li>
        </ul>
        <Note>
          ...and last year, I broght everything together by refining the
          structure of log traces, and creating a bespoke interface for
          navigating them while debugging.
        </Note>
      </section>
    </section>
  );
}
