import React from 'react';
import Note from '../../components/revealComponents/note';

import oldLogStructureImg from '../../img/log-structure-simple.png';
import logStructureVideo from '../../img/log-structure.mp4';

export default function Traces() {
  return (
    <>
      <section data-auto-animate>
        <h3>Tracing execution</h3>
        <Note>
          <ul>
            <li>
              Before we can look at the traces, we need some kind of internal
              record.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate data-transition="none">
        <h3>Tracing execution</h3>
        <img src={oldLogStructureImg} alt="Gillian's log structure" />
        <Note>
          {/* TODO: rewrite */}
          <ul>
            <li>
              To achieve this, each action is logged to a local database as a
              bite-sized report.
            </li>
            <li>
              This was pretty naive at fist - no structure, each report logged
              sequentially.
            </li>
            <li>
              Ideally, we want the shape of the logs to resemble the shape of
              execution.
            </li>
          </ul>
        </Note>
      </section>
      <section data-transition="none">
        <h3>Tracing execution</h3>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={logStructureVideo}
          data-autoplay
          style={{ margin: 'var(--r-block-margin) 0' }}
        />
        <Note>
          <ul>
            <li>
              ...and after restructuring, now it does. The shape of logs are
              much more intuitive. Branching paths are clear, and state matching
              is concealed under the relevant command.
            </li>
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
