import React from 'react';
import Note from '../../components/revealComponents/note';
import fullImg from '../../img/gillian-structure/full.png';
import engineImg from '../../img/gillian-structure/engine.png';
import compilerImg from '../../img/gillian-structure/compiler.png';
import debuggerImg from '../../img/gillian-structure/debugger.png';

export default function GillianStructure() {
  return (
    <section className="gillian-structure">
      <section data-transition="none-out">
        <h2>Structure overview</h2>
        <img src={fullImg} />
        <Note>
          A quick overview of Gillian&apos;s structure; the blue parts are
          language-independant and provided by Gillian, and the red is
          language-specific implementation.
        </Note>
      </section>
      <section data-transition="none">
        <h2>Structure overview</h2>
        <img src={engineImg} />
        <Note>
          It all centers around the engine - it performs all the symbolic
          execution and analysis stuff that we want to see.
        </Note>
      </section>
      <section data-transition="none">
        <h2>Structure overview</h2>
        <img src={compilerImg} />
        <Note>
          It needs an implementation of the language&apos;s memory model, and a
          compiler from source code to GIL, our intermediate language.
        </Note>
      </section>
      <section data-transition="none">
        <h2>Structure overview</h2>
        <img src={debuggerImg} />
        <Note>
          When debugging, the UI instructs the debugger, which instructs the
          engine to step through execution; all state info, and whatever else,
          is reported to a local database for the debugger to refer to.
        </Note>
      </section>
      <section data-transition="none">
        <h2>Structure overview</h2>
        <img src={fullImg} />
        <Note>
          Debugging at the GIL level comes for free, though a module can be
          provided to lift back to the source language level.
        </Note>
      </section>
    </section>
  );
}
