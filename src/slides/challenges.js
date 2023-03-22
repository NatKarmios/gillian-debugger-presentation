import React from 'react';
import Note from '../components/revealComponents/note';

export default function Challenges() {
  return (
    <section>
      <section>
        <h2>Some interesting technical challenges</h2>
        <em>(if we have time)</em>
        <Note>
          This came with some interesting technical challenges, which we&apos;re
          interesed to see if anyone else relates to.
        </Note>
      </section>
      <section>
        <h3>Tracing execution</h3>
      </section>
      {/* <section>
        <h3>Restructuring the interpreter</h3>
        <p>&lt;diagram goes here&gt;</p>
        <Note>
          <ul>
            <li>
              Originally, Gillian&apos;s interpreter just ran to completion,
              like you&apos;d expect; when execution branches, each branch is
              explored depth-first.
            </li>
            <li>
              Some early debugger work split interpretation to give a thunk for
              each command, and I later added the ability to select which branch
              to execute a command from, effectively allowing one branch to be
              &quot;paused&quot; in favour of another.
            </li>
          </ul>
        </Note>
      </section> */}
      <section>
        <h3>Extending the DAP</h3>
        <p>&lt;diagram goes here&gt;</p>
        <Note>
          <ul>
            <li>
              The first debugger iteration used the debug adapter protocol to
              leverage existing debugger frontends
            </li>
            <li>
              But it quickly became apparent that this wasn&quot;t expressive
              enough for symbolic execution.
            </li>
            <li>
              Luckily, both VSCode and OCaml&apos;s DAP library are extensible,
              so we could add this missing expressivity, along with a custom
              interface.
            </li>
            <li>
              We think there&apos;s some potential for these DAP extensions, and
              even the interface, to find use outside Gillian. Let us kn
            </li>
          </ul>
        </Note>
      </section>
      <section>
        <h3>Lifting</h3>
        <p>&lt;diagram goes here&gt;</p>
        <Note>
          <ul>
            <li>
              While the debugger is up and running for GIL, our intermediate
              language, we obviously want to just think about the source
              language when debugging.
            </li>
            <li>
              We needed to take care here to preserve Gillian&apos;s
              parametricity; opting to define an interface for source language
              modules to lift from GIL, using language-specific annotation.
            </li>
            <li>
              We currently have a lifter working for WISL, a small
              while-language we use for education and research.
            </li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
