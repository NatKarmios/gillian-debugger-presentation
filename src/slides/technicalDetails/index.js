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
        <Note>
          <p>
            Debugging a with tool like Gillian comes with a unique set of
            problems; symbolic execution can branch, we want to peek into the
            state matching process, and SMT solvers add a whole layer of
            complexity.
          </p>
          <p>Here are a few of the most interesting problems we solved.</p>
        </Note>
      </section>
      <Traces />
      <Interpreter />
      <DAP />
    </section>
  );
}
