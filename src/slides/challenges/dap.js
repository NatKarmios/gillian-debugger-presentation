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
              Our first shot at debugging used the Debug Adapter Protocol (the
              DAP) to work with existing debugger frontends.
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
              Luckily, the DAP is extensible, so I added this missing
              expressivity, along with a custom interface in VSCode.
            </li>
            <li>
              We think there&apos;s some potential for these DAP extensions, and
              perhaps even the interface, to be useful outside of Gillian.
            </li>
          </ul>
        </Note>
      </section>
    </>
  );
}
