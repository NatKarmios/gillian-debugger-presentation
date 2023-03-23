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
            <li>I think it&apos;s about time you see it in action.</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Demo time!</h2>
        <Code data-line-numbers="|7-16|6,17|1-4" />
        <Note>
          <ul>
            <li>
              As a quick example, I&apos;ll take you on a tour of a verification
              of a simple function, recursive linked-list length, in WISL, our
              toy language. &lt;RET&gt;
            </li>
            <li>
              This is the function body; nothing out of the ordinary.
              &lt;RET&gt;
            </li>
            <li>
              We have a precondition requiring that we have a list, and a
              postcondition ensuring that the list still exists, and we are in
              fact returning the length. &lt;RET&gt;
            </li>
            <li>This spec uses a simple list predicate.</li>
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
