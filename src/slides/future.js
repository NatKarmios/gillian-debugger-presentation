import React from 'react';

export default function Future() {
  return (
    <section>
      <h2>Where to next?</h2>
      <ul>
        <div className="fragment fade-up" data-fragment-index="1">
          <li className="fragment semi-fade-out" data-fragment-index="2">
            Coursework
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
    </section>
  );
}
