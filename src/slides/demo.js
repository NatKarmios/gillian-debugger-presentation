import React from 'react';
import Note from '../components/revealComponents/note';

const code = `
predicate list(+x, alpha) {
  (x == null) * (alpha == nil);
  (x -> #v, #z) * list(#z, #beta) * (alpha == #v::#beta)
}

{ (x == #x) * list(#x, #alpha) }
function llen(x) {
  if (x = null) {
      n := 0
  } else {
      t := [x+1];
      n := llen(t);
      n := n + 1
  };
  return n
}
{ list(#x, #alpha) * (ret == len(#alpha)) }
`.trim();

function Code(props) {
  return (
    <pre>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <code {...props} className="wisl">
        {code}
      </code>
    </pre>
  );
}

export default function Demo() {
  return (
    <section>
      <section data-auto-animate>
        <h2>Demo time!</h2>
        <Note>
          <ul>
            <li>
              I think it&apos;s about time you see the debugger in action.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Demo time!</h2>
        <Code data-line-numbers="|7-16|6,17|1-4" />
        <Note>
          <ul>
            <li>
              I&apos;ll quickly talk you through verifying recursive linked-list
              length in WISL, our toy language. &lt;RET&gt;
            </li>
            <li>
              Here&apos;s the function body; nothing out of the ordinary.
              &lt;RET&gt;
            </li>
            <li>
              We have a pre- and post-condition describing the list in memory
              and the return value. &lt;RET&gt;
            </li>
            <li>...and the definition of the list predicate.</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Demo time!</h2>
        <Note>[DO DEMO]</Note>
      </section>
    </section>
  );
}
