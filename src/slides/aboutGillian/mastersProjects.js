import React from 'react';
import Note from '../../components/revealComponents/note';

import diagram1 from '../../img/masters/masters-1.png';
import diagram2 from '../../img/masters/masters-2.png';
import diagram3 from '../../img/masters/masters-3.png';
import diagram4 from '../../img/masters/masters-4.png';

export default function MastersProjects() {
  const header = (
    <>
      <h3 className="title">Gillian Debugging</h3>
      <p className="subtitle small">A series of MSc projects</p>
    </>
  );

  return (
    <section className="masters-projects">
      <section data-transition="none-out">
        {header}
        <img src={diagram1} />
        <Note>This journey began as a series of masters&apos; projects.</Note>
      </section>
      <section data-transition="none">
        {header}
        <img src={diagram2} />
        <Note>In 2020, Radu introduced infrastructure for logging traces</Note>
      </section>
      <section data-transition="none">
        {header}
        <img src={diagram3} />
        <Note>
          In 2021, Matthew took a first stab at debugging, working within the
          bounds of Microsoft&apos;s Debug Adapter Protocol.
        </Note>
      </section>
      <section data-auto-animate data-transition="none">
        {header}
        <img src={diagram4} />
        <Note>
          ...and last year, I brought everything together by refining the log
          structure, and creating a bespoke interface for debugging.
        </Note>
      </section>
      <section data-auto-animate>
        {header}
        <img src={diagram4} />
        <p>
          <i>...with credit to Sacha for supervising.</i>
        </p>
        <Note>
          I should mention, Sacha Ayoun was supervising every step of the way.
        </Note>
      </section>
    </section>
  );
}
