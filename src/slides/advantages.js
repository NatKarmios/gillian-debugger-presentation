import React from 'react';
import Note from '../components/revealComponents/note';

import maps from '../img/advantages/maps.png';
import nesting from '../img/advantages/nesting.png';
import sdap from '../img/advantages/s-dap.png';

export default function Advantages() {
  return (
    <section className="advantages">
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <Note>So what sets us apart?</Note>
      </section>
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <img src={maps} style={{ width: '30vw' }} />
        <h3>
          <em>Flexibility</em>
        </h3>
        <Note>
          Given that our interface provides a general mechanism for displaying
          execution traces, we&apos;ve found a surprising level of flexibility,
          before we even looked for it - for example, the execution map and the
          state matching you saw earlier both use that same mechanism.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <img src={nesting} />
        <h3>
          <em>Clarity</em>
        </h3>
        <Note>
          The ability to nest parts of a trace inside others allows arbitrary
          amounts of detail to be offered to a user, without overwhelming them
          when it isn&apos;t needed.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <img src={sdap} style={{ width: '30vw' }} />
        <h3>
          <em>Generality</em>
        </h3>
        <Note>
          <p>
            Having Gillian as a starting point meant we already had an eye for
            parametricity, so much of the implementation is quite abstraced.
          </p>
          <p>
            Because of this, we think our work has potential to form a unified
            interface across tools and editors, the same way that
            Microsoft&apos;s DAP provides for concrete debugging.
          </p>
          <p>A symbolic DAP, or S-DAP, if you will.</p>
        </Note>
      </section>
    </section>
  );
}
