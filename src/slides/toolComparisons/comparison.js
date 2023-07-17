import React from 'react';
import Note from '../../components/revealComponents/note';

function Y() {
  return <span style={{ color: '#1ab047' }}>✓</span>;
}

function N() {
  return <span style={{ color: '#b01a1a' }}>✗</span>;
}

function K() {
  return <span style={{ fontSize: '0.8em' }}>kinda</span>;
}

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
          <td>
            <Y />
          </td>
          <td>
            <Y />
          </td>
          <td>
            <Y />
          </td>
          <td>
            <Y />
          </td>
        </tr>
        <tr>
          <td>
            <span>Interactive</span>
          </td>
          <td>
            <N />
          </td>
          <td>
            <Y />
          </td>
          <td>
            <Y />
          </td>
          <td>
            <N />
          </td>
        </tr>
        <tr>
          <td>
            <span>Visual</span>
          </td>
          <td>
            <N />
          </td>
          <td>
            <Y />
          </td>
          <td>
            <K />
          </td>
          <td>
            <N />
          </td>
        </tr>
        <tr>
          <td>
            <span>Flow control</span>
          </td>
          <td>
            <N />
          </td>
          <td>
            <Y />
          </td>
          <td>
            <K />
          </td>
          <td>
            <N />
          </td>
        </tr>
        <tr>
          <td>
            <span>Compositional</span>
          </td>
          <td>
            <N />
          </td>
          <td>
            <N />
          </td>
          <td>
            <Y />
          </td>
          <td>
            <Y />
          </td>
        </tr>
      </table>
      <Note>As you can see, no tool ticks every box.</Note>
    </section>
  );
}
