import React from 'react';
import Note from '../components/revealComponents/note';

export default function Future() {
  return (
    <section>
      <h2>Where to next?</h2>
      <ul>
        <div className="fragment fade-up" data-fragment-index="1">
          <li className="fragment semi-fade-out" data-fragment-index="2">
            Gillian 2.0
          </li>
        </div>
        <div className="fragment fade-up" data-fragment-index="2">
          <li className="fragment semi-fade-out" data-fragment-index="3">
            Industry viability
          </li>
        </div>
        <div className="fragment fade-up" data-fragment-index="3">
          <li className="fragment semi-fade-out" data-fragment-index="4">
            Symbolic DAP extension
          </li>
        </div>
      </ul>
      <Note>
        <ul>
          <li>Looking to the future...</li>
          <li>
            As we continue to improve Gillian and the theory behind it,
            we&apos;re considering major changes to Gillian&pos;s internal
          </li>
        </ul>
      </Note>
    </section>
  );
}
