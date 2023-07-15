import React from 'react';
import Note from '../components/revealComponents/note';

export default function Advantages() {
  return (
    <section className="advantages">
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <Note>So what&apos;s so special about our work?</Note>
      </section>
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <p>
          <em>Flexibility</em>
        </p>
        {/* TODO */}
        <p className="todo">side-by-side view of exec-map and match-map</p>
        <Note>
          Given that our interface provides a general mechanism for displaying
          execution traces, we&apos;ve found a surprising level of flexibility,
          before we even looked for it - for example, the maps of both symbolic
          execution and state matching can be displayed using the same
          mechanism.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <p>
          <em>Clarity</em>
        </p>
        {/* TODO */}
        <p className="todo">view of nesting in maps</p>
        <Note>
          The ability to nest parts of a trace inside others allows arbitrary
          amounts of detail to be offered to a user, without overwhelming them
          when that detail isn&apos;t needed.
        </Note>
      </section>
      <section data-auto-animate>
        <h2>What makes our work special?</h2>
        <p>
          <em>Generality</em>
        </p>
        {/* TODO */}
        <p className="todo">
          diagram of multiple tools and editors communicating via S-DAP
        </p>
        <Note>
          <p>
            Working with Gillian allows for parametricity across source
            languages.
          </p>
          <p>
            When looking beyond Gillian, our work has potential to form a
            unified interface across tools and editors, the same way that
            Microsoft&apos;s DAP provides for concrete debugging.
          </p>
        </Note>
      </section>
    </section>
  );
}
