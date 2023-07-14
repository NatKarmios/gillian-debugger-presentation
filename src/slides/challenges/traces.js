import React from 'react';
import Note from '../../components/revealComponents/note';

import logStructureImg from '../../img/log_structure.png';
import oldLogStructureImg from '../../img/log_structure_old.png';

export default function Traces() {
  return (
    <>
      <section data-auto-animate>
        <h3>Tracing execution</h3>
        <Note>
          <ul>
            <li>
              Regardless of where execution currently is, we want to see what
              states came before.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h3>Tracing execution</h3>
        <img src={oldLogStructureImg} alt="Gillian's log structure" />
        <Note>
          <ul>
            <li>
              To this end, the full trace is logged to an on-disk SQL database.
            </li>
            <li>
              This was pretty naive at fist, deriving the order of nodes from
              their timestamps.
            </li>
            <li>
              Ideally, we want the shape of the logs to resemble the shape of
              execution...
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h3>Tracing execution</h3>
        <img src={logStructureImg} alt="Gillian's log structure" />
        <Note>
          <ul>
            <li>...and now it does.</li>
            <li>
              While the functionality&apos;s all there, logging is our biggest
              performance bottleneck.
            </li>
            <li>
              There&apos;s some low-hanging fruit to improve this, but
              we&apos;re interested in seeing if more intelligent solutions are
              out there.
            </li>
          </ul>
        </Note>
      </section>
    </>
  );
}
