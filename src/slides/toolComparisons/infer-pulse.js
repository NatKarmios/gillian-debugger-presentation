import React from 'react';
import Note from '../../components/revealComponents/note';

const code = `
$ infer explore
Auto-selecting the only issue in './infer-out/report.json'

#0
test.c:5: error: Nullptr Dereference
  Pulse found a potential null pointer dereference  on line 4.

test.c:4:5: source of the null value part of the trace starts here
2.
3. void f() {
4.     int* x = NULL;
       ^
5.     *x = 1;
6. }

# ... etc ...
`.trim();

function Code() {
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}

export default function InferPulse() {
  return (
    <>
      <section data-auto-animate>
        <h3>Infer Pulse</h3>
        <Note>
          Pulse is an analysis from Facebook&apos;s Infer, which uses
          biabduction to find memory bugs.
        </Note>
      </section>
      <section data-auto-animate>
        <h3>Infer Pulse</h3>
        <Code />
        <Note>
          It only provides traces via basic text, but on the bright side,
          it&apos;s compositional.
        </Note>
      </section>
    </>
  );
}
