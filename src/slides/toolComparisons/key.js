import React from 'react';
import Note from '../../components/revealComponents/note';

import sed from '../../img/other-tools/key.png';

export default function KeY() {
  return (
    <>
      <section data-auto-animate>
        <h3>KeY</h3>
        <Note>
          KeY is a research project that creates formal analysis tools for Java.
        </Note>
      </section>
      <section data-auto-animate>
        <h3>KeY</h3>
        <img src={sed} />
        <Note>
          Their symbolic execution debugger is rather well developed, though
          it&apos;s highly specialised to Java, and not compositional.
        </Note>
      </section>
    </>
  );
}
