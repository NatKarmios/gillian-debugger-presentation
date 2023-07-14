import React from 'react';
import Note from '../components/revealComponents/note';

export default function Future() {
  return (
    <section className="future-plans">
      <section data-auto-animate>
        <h2>What now?</h2>
        <Note>Given where we are, what are we reaching for next?</Note>
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
          First of all, this isn&apos;t our comfort zone as a group. Any advice,
          whether it be for engineering or design, would be greatly appreciated.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What now?</h2>
        <ul>
          <li>
            We&apos;re new to this!
            <br />
            <em>All advice is appreciated!</em>
          </li>
          <li>
            Refining for education, then industry.
            <br />
            <em>Coursework later this year.</em>
          </li>
        </ul>
        <Note>
          <p>
            While our student lab was a success, we want to take things further.
            Ideally, we&apos;d like to run a coursework using Gillian&apos;s
            debugger in the coming academic year.
          </p>
          <p>
            We&apos;d also like to explore this debugger&apos;s potential in
            industry...
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
            Refining for education, then industry.
            <br />
            <em>Coursework later this year.</em>
          </li>
          <li>
            Realising potential generality
            <br />
            <em>Would anyone use it?</em>
          </li>
        </ul>
        {/* TODO: say i presented to meta in workshop */}
        <Note>
          <p>
            ...to that end, we looking into collaborating with Meta, to bring
            our interface to Infer-Pulse.
          </p>
          <p>
            Of course, we&apos;ll keep our eyes peeled for any other projects
            that could make use of our work.
          </p>
        </Note>
      </section>
    </section>
  );
}
