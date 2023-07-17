import React from 'react';
import Note from '../../components/revealComponents/note';

import cbmcViewer from '../../img/other-tools/cbmc-viewer.png';
import cbmcDebug from '../../img/other-tools/cbmc-debugger.png';

export default function CBMC() {
  return (
    <>
      <section data-auto-animate>
        <h3>CBMC</h3>
        <Note>
          CBMC is a bounded model checker; it finds bugs in C programs.
        </Note>
      </section>
      <section data-auto-animate>
        <h3>CBMC</h3>
        <img src={cbmcViewer} />
        <Note>
          <p>cbmc-viewer renders traces to static webpages.</p>
          <p>
            This is certainly a step above text logs, but it can still be hard
            to find specific information. CBMC&apos;s execution is relatively
            simple and specialised, and there&apos;s no compositionality on
            offer here.
          </p>
        </Note>
      </section>
      <section data-auto-animate>
        <h3>CBMC</h3>
        <img src={cbmcDebug} />
        <Note>
          They&apos;ve taken this further with a VSCode extension that steps
          through traces. It&apos;s gives the same information, albeit more
          intuitively.
        </Note>
      </section>
    </>
  );
}
