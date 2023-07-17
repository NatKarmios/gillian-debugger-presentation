import React from 'react';
import Note from '../../components/revealComponents/note';

import verifastIDE from '../../img/other-tools/verifast-ide.png';
import verifastVSCode from '../../img/other-tools/verifast-vscode.png';

export default function VeriFast() {
  return (
    <>
      <section data-auto-animate>
        <h3>VeriFast</h3>
        <Note>
          VeriFast is a tool prototype that verifies C and Java code, in a
          similar manner to Gillian - compositionality included.
        </Note>
      </section>
      <section data-auto-animate>
        <h3>VeriFast</h3>
        <img src={verifastIDE} />
        <Note>
          <p>
            Their IDE shows the symbolic state at the point where verification
            fails (or a manual breakpoint).
          </p>
          <p>
            This is pretty simple, and aside from breakpoints, you can&apos;t
            control execution.
          </p>
        </Note>
      </section>
      <section data-auto-animate>
        <h3>VeriFast</h3>
        <img src={verifastVSCode} />
        <Note>
          Their recent VSCode extension <i>does</i> allow stepping through
          traces with a tree view, though this is barebones.
        </Note>
      </section>
    </>
  );
}
