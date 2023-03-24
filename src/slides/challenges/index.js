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
        <em>(that you might relate to)</em>
        <Note>
          This came with some interesting - and perhaps relatable - technical
          challenges.
        </Note>
      </section>
      <Interpreter />
      <Traces />
      <DAP />
    </section>
  );
}
