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
          </tr>
        </thead>
        <tr>
          <td>
            <span>View traces</span>
          </td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>
            <span>Interactive</span>
          </td>
          <td>✗</td>
          <td>✓</td>
          <td>✓</td>
          <td>✗</td>
        </tr>
        <tr>
          <td>
            <span>Visual</span>
          </td>
          <td>✗</td>
          <td>✓</td>
          <td>✓</td>
          <td>✗</td>
        </tr>
        <tr>
          <td>
            <span>Flow control</span>
          </td>
          <td>✗</td>
          <td>✓</td>
          <td>
            <span style={{ fontSize: '0.8em' }}>kinda</span>
          </td>
          <td>✗</td>
        </tr>
        <tr>
          <td>
            <span>Compositional</span>
          </td>
          <td>✗</td>
          <td>✗</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
      </table>
      <Note>As you can see, no tool ticks every box.</Note>
    </section>
  );
}
