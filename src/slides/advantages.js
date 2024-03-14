import React from 'react';
import Note from '../components/revealComponents/note';

import maps from '../img/advantages/maps.png';
import nesting from '../img/advantages/nesting.png';
import sdap from '../img/advantages/sedap.png';

export default function Advantages() {
  return (
    <section className="advantages">
      <section data-auto-animate>
        <h2>Some exciting observations</h2>
        <Note>We&apos;ve ended up with some interesting results.</Note>
      </section>
      <section data-auto-animate>
        <h2>Some exciting observations</h2>
        <img src={maps} style={{ width: '30vw' }} />
        <h3>
          <em>Flexibility</em>
        </h3>
        <Note>
          We&apos;ve found a surprising level of flexibility in the interface -
          for example, we realised that we can reuse the mechanism for viewing
          execution traces to dislay the state matching process.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Some exciting observations</h2>
        <img src={nesting} />
        <h3>
          <em>Clarity</em>
        </h3>
        <Note>
          The nesting capabilities allow for an intuitive view of, for example,
          function calls and loop bodies, while tidying away finer details that
          the user may not need.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Some exciting observations</h2>
        <img src={sdap} style={{ width: '30vw' }} />
        <h3>
          <em>Generality</em>
        </h3>
        <Note>
          <p>
            The debugger uses Microsoft&apos;s Debug Adapter Protocol (or DAP)
            where appropriate, and extends it where functionality is lacking.
          </p>
          <p>
            And, given Gillian&apos;s stance on parametricity, much of the
            implementation is quite abstracted.
          </p>
          <p>
            So this may have the potential to form a unified interface across
            tools and editors, the same way that the DAP provides for concrete
            debugging.
          </p>
          <p>A symbolic DAP, or S-DAP, if you will.</p>
        </Note>
      </section>
    </section>
  );
}
