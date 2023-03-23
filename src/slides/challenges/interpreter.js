import React from 'react';
import Note from '../../components/revealComponents/note';

import ogImg from '../../img/interpreter/og.png';
import thunkedImg from '../../img/interpreter/thunked.png';
import branchedImg from '../../img/interpreter/branched.png';

export default function Interpreter() {
  return (
    <section>
      <h3>Controlling execution</h3>
      <div className="grid" style={{ display: 'grid' }}>
        <div>Original:</div>
        <img src={ogImg} alt="Original interpreter behaviour" />
        <div className="fragment" data-fragment-index="1">
          Thunked:
        </div>
        <img
          className="fragment"
          data-fragment-index="1"
          src={thunkedImg}
          alt="Thunked interpreter behaviour"
        />
        <div className="fragment" data-fragment-index="2">
          Branching:
        </div>
        <img
          className="fragment"
          data-fragment-index="2"
          src={branchedImg}
          alt="Branching interpreter behaviour"
        />
      </div>
      <Note>
        <ul>
          <li>
            Originally, Gillian simply executed programs to completion,
            executing one symbolic branch after another, depth first.
            &lt;RET&gt;
          </li>
          <li>
            Naturally, we need more control when debugging, so the interpreter
            was changed to execute one command at a time, and return a thunk to
            execute the next. &lt;RET&gt;
          </li>
          <li>
            But we don&apos;t just want to control when to execute, but what to
            execute. The thunks returned by the interpreter now support
            specifying which branch to execute.
          </li>
        </ul>
      </Note>
    </section>
  );
}
