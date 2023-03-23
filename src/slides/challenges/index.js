import React from 'react';
import Note from '../../components/revealComponents/note';
import DAP from './dap';
import Interpreter from './interpreter';
import Traces from './traces';

export default function Challenges() {
  return (
    <section>
      <section>
        <h2>Some interesting technical challenges</h2>
        <em>(if we have time)</em>
        <Note>
          This came with some interesting technical challenges, which we&apos;re
          interested to see if anyone else relates to.
        </Note>
      </section>
      <Interpreter />
      <Traces />
      <DAP />
    </section>
  );
}
