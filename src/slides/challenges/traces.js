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
              We want to be able to inspect symbolic state at any previous point
              in the program, regardless of where execution is now.
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
              To this end, the full trace is logged to a database, which can be
              queried at will.
            </li>
            <li>
              This was originally a naive implementation, depending on
              time-of-insertion to derive order.
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
            <li>...and now they do.</li>
            <li>
              While we&apos;re happy with the functionality on offer here, we
              need to address performance, as logging is quickly becoming a
              bottleneck.
            </li>
            <li>
              There&apos;s some low-hanging fruit to help this, but we&apos;re
              interested in seeing how other projects tackle it.
            </li>
          </ul>
        </Note>
      </section>
    </>
  );
}
