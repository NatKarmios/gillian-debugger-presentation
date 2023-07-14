import React from 'react';
import Note from '../components/revealComponents/note';

export default function RelatedWork() {
  return (
    <section className="related-work">
      <table style={{ textAlign: 'center' }}>
        <tr>
          <td />
          <td>CBMC</td>
          <td>KeY</td>
          <td>VeriFast</td>
          <td>Infer-Pulse</td>
          <td className="fragment" data-fragment-index="1">
            Gillian
          </td>
        </tr>
        <tr>
          <td>View traces</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td className="fragment" data-fragment-index="1">
            Y
          </td>
        </tr>
        <tr>
          <td>Interactive debugger</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td className="fragment" data-fragment-index="1">
            Y
          </td>
        </tr>
        <tr>
          <td>Visual debugger</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td className="fragment" data-fragment-index="1">
            Y
          </td>
        </tr>
        <tr>
          <td>Flow control</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td className="fragment" data-fragment-index="1">
            Y
          </td>
        </tr>
        <tr>
          <td>Compositionality</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td className="fragment" data-fragment-index="1">
            Y
          </td>
        </tr>
        <tr>
          <td>Engine-agostic</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td>N</td>
          <td className="fragment" data-fragment-index="1">
            Y
          </td>
        </tr>
      </table>
      <Note>e</Note>
    </section>
  );
}
