import React from 'react';
import Note from '../../components/revealComponents/note';
import DAP from './dap';
import Interpreter from './interpreter';
import Traces from './traces';

export default function TechnicalDetails() {
  return (
    <section>
      <section>
        <h2>Some technical challenges!</h2>
        <em>(and how we solved them)</em>
        <Note>This task had some interesting problems to solve</Note>
      </section>
      <Traces />
      <Interpreter />
      <DAP />
    </section>
  );
}
