import React from 'react';
import Note from '../../components/revealComponents/note';

import beforeImg from '../../img/dap/before.png';
import afterImg from '../../img/dap/after.png';

export default function DAP() {
  return (
    <>
      <section data-transition="fade">
        <h3>Extending the DAP</h3>
        <img src={beforeImg} alt="Before DAP extensions" />
        <Note>
          <ul>
            <li>
              The first debugger iteration used the debug adapter protocol to
              leverage existing debugger frontends
            </li>
            <li>
              But it quickly became apparent that this wasn&apos;t expressive
              enough for symbolic execution.
            </li>
          </ul>
        </Note>
      </section>
      <section data-transition="fade">
        <h3>Extending the DAP</h3>
        <img src={afterImg} alt="After DAP extensions" />
        <Note>
          <ul>
            <li>
              Luckily, both VSCode and OCaml&apos;s DAP library are extensible,
              so we could add this missing expressivity, along with a custom
              interface.
            </li>
            <li>
              We think there&apos;s some potential for these DAP extensions, and
              even the interface, to find use outside Gillian. Let us know if
              you have ideas!
            </li>
          </ul>
        </Note>
      </section>
    </>
  );
}
