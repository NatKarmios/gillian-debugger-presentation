import React from 'react';
import Note from '../components/revealComponents/note';

export default function Future() {
  return (
    <section className="future-plans">
      <section data-auto-animate>
        <h2>What now?</h2>
        <Note>What are we reaching for next?</Note>
      </section>
      <section data-auto-animate>
        <h2>What now?</h2>
        <ul>
          <li>
            We&apos;re new to this!
            <br />
            <em>All advice is appreciated!</em>
          </li>
        </ul>
        <Note>
          First of all, this isn&apos;t our comfort zone as a group. Any advice
          from more experienced tool developers would be greatly appreciated.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What now?</h2>
        <ul>
          <li>
            <span className="item">We&apos;re new to this!</span>
            <br />
            <em>All advice is appreciated!</em>
          </li>
          <li>
            Realising potential generality
            <br />
            <em>Would anyone use it?</em>
          </li>
        </ul>
        <Note>
          <p>
            We think this S-DAP concept has a lot of potential, so after
            defining a more concrete standard, we&apos;ll be looking for
            opportunities to try things out with other tools.
          </p>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What now?</h2>
        <ul>
          <li>
            <span className="item">We&apos;re new to this!</span>
            <br />
            <em>All advice is appreciated!</em>
          </li>
          <li>
            Realising potential generality
            <br />
            <em>Would anyone use it?</em>
          </li>
          <li>Paper soon!</li>
        </ul>
        <Note>
          <p>
            And I&apos;m finally putting pen to paper to publish all this
            properly, so watch this space.
          </p>
        </Note>
      </section>
    </section>
  );
}
