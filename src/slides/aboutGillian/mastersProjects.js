import React from 'react';
import Note from '../../components/revealComponents/note';

export default function MastersProjects() {
  const header = (
    <>
      <h3 className="title">Gillian Debugging</h3>
      <p className="subtitle small">A series of MSc projects</p>
    </>
  );

  return (
    <section className="masters-projects">
      <section data-auto-animate>
        {header}
        <Note>This journey began as a series of masters&apos; projects.</Note>
      </section>
      <section data-auto-animate>
        {header}
        <p>Radu Lacraru 2020: Logging infrastructure</p>
        {/* TODO */}
        <p className="todo">diagram</p>
        <Note>In 2020, Radu introduced infrastructure for logging traces</Note>
      </section>
      <section data-auto-animate>
        {header}
        <p>Matthew Ho 2021: First (DAP-compliant) debugger</p>
        {/* TODO */}
        <p className="todo">diagram</p>
        <Note>
          In 2021, Matthew took a first stab at debugging, working within the
          bounds of Microsoft&apos;s Debug Adapter Protocol.
        </Note>
      </section>
      <section data-auto-animate>
        {header}
        <p>Me 2022: kapow</p>
        {/* TODO */}
        <p className="todo">diagram</p>
        <Note>
          ...and last year, I brought everything together by refining the log
          structure, and creating a bespoke interface for debugging.
        </Note>
      </section>
    </section>
  );
}
