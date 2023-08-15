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
        <Note pad>
          Originally, Gillian simply executed the whole program, in one go.
        </Note>
        <img src={ogImg} alt="Original interpreter behaviour" />
        <div className="fragment" data-fragment-index="1">
          Thunked:
          <Note>
            Naturally, we need more control when debugging, so we split
            execution into thunks, with each call executing one command.
          </Note>
        </div>
        <img
          className="fragment"
          data-fragment-index="1"
          src={thunkedImg}
          alt="Thunked interpreter behaviour"
        />
        <div className="fragment" data-fragment-index="2">
          Branching:
          <Note>
            But we don&apos;t just want to control when to execute, but what to
            execute; those thunk calls can now specify which branch to step in.
          </Note>
        </div>
        <img
          className="fragment"
          data-fragment-index="2"
          src={branchedImg}
          alt="Branching interpreter behaviour"
        />
      </div>
    </section>
  );
}
