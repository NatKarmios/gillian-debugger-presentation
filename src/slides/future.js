import React from 'react';
import Note from '../components/revealComponents/note';

export default function Future() {
  const a = (
    <li>
      Improvements, feature additions
      <br />
      <em>e.g. better errors&#8212;what features do you want?</em>
    </li>
  );
  const b = (
    <li>
      Realising potential generality
      <br />
      <em>Would anyone use it?</em>
    </li>
  );
  return (
    <section className="future-plans">
      <section data-auto-animate>
        <h2>What now?</h2>
        <Note>What are we reaching for next?</Note>
      </section>
      <section data-auto-animate>
        <h2>What now?</h2>
        <ul>{a}</ul>
        <Note>
          First of all, the overall UX needs improvement, and features rounded
          out---what features would you like to see?
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What now?</h2>
        <ul>
          {a}
          {b}
        </ul>
        <Note>
          <p>
            We think this SEDAP concept has a lot of potential, so after
            defining a more concrete standard, we&apos;ll be looking for
            opportunities to try things out with other tools, like Infer.
          </p>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What now?</h2>
        <ul>
          {a}
          {b}
          <li>Paper soon!</li>
        </ul>
        <Note>
          <p>
            And like a true research engineer, I have been tricked into writing
            a paper for all this, so watch this space.
          </p>
        </Note>
      </section>
    </section>
  );
}
