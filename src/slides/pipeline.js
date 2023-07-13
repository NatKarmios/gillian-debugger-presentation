import React from 'react';
import Note from '../components/revealComponents/note';

export default function Pipeline() {
  return (
    <section className="gillian-history">
      <h2>How does it work?</h2>
      <p>&lt;imagine a cool diagram&gt;</p>
      <p>
        Source code
        <br />
        → GIL code
        <br />
        → Gillian interpreter (with memory model)
        <br />
        ↔ Debugger (with lifter)
        <br /> ↔ Debug interface
      </p>
      <Note>
        <ul>
          <li>Source code is compiled into GIL, our intermediate language</li>
          <li>
            Gillian&apos;s interpreter operates on that GIL, producing a log
            trace as it goes
          </li>
          <li>
            The debugger controls the interpreter, and uses log traces with a
            source-language lifter to produce a readable map of execution
          </li>
          <li>
            The debug interface sends commands to the debugger, which in turn
            updates the interface with the execution map to be displayed
          </li>
        </ul>
      </Note>
    </section>
  );
}
