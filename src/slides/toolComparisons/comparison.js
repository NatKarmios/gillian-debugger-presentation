import React from 'react';
import Note from '../../components/revealComponents/note';

export default function Comparison() {
  return (
    <section className="tool-comparison">
      <table>
        <thead>
          <tr>
            <td>
              <span>Feature</span>
            </td>
            <td>CBMC</td>
            <td>KeY</td>
            <td>VeriFast</td>
            <td>Infer-Pulse</td>
            <Note pad>
              You can see that there are a range of features we&apos;d&nbsp;
              <i>like</i> to see in symoblic tools
            </Note>
          </tr>
        </thead>
        <tr className="fragment">
          <td>
            <span>View traces</span>
          </td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
          <Note>At the bare minimum, we need to look at traces</Note>
        </tr>
        <tr className="fragment">
          <td>
            <span>Interactive debugger</span>
          </td>
          <td>✗</td>
          <td>✓</td>
          <td>✓</td>
          <td>✗</td>
          <Note>Ideally, we want a debugger we can interact with...</Note>
        </tr>
        <tr className="fragment">
          <td>
            <span>Visual debugger</span>
          </td>
          <td>✗</td>
          <td>✓</td>
          <td>✓</td>
          <td>✗</td>
          <Note>...and one that gives an intuitive view of the trace.</Note>
        </tr>
        <tr className="fragment">
          <td>
            <span>Flow control</span>
          </td>
          <td>✗</td>
          <td>✓</td>
          <td>~</td>
          <td>✗</td>
          <Note>
            Since symbolic execution can branch, it&apos;d be nice to choose
            what branches we explore.
          </Note>
        </tr>
        <tr className="fragment">
          <td>
            <span>Compositionality</span>
          </td>
          <td>✗</td>
          <td>✗</td>
          <td>✓</td>
          <td>✓</td>
          <Note>
            Now, compositionality is a big win for scalability, as only changed
            code needs to be re-verified.
          </Note>
        </tr>
        <tr className="fragment">
          <td>
            <span>Engine-agnostic</span>
          </td>
          <td>✗</td>
          <td>✗</td>
          <td>✗</td>
          <td>✗</td>
          <Note>engine-agnostic</Note>
        </tr>
      </table>
    </section>
  );
}
