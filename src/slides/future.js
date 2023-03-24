import React from 'react';
import Note from '../components/revealComponents/note';

export default function Future() {
  return (
    <section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <Note>
          <ul>
            <li>Given where we are, what are we reaching for next?</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li>
            <em>Debugger:</em>
            more usability
          </li>
        </ul>
        <Note>
          <ul>
            <li>Could you see yourself, or your team, using this debugger?</li>
            <li>
              If not, is it because we&apos;re missing something, such as
              bi-abduction?
            </li>
            <li>What do you think we should focus on?</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li className="inactive">
            <em>Debugger:</em>
            more usability
          </li>
          <li>
            <em>Gillian:</em>
            more languages
          </li>
        </ul>
        <Note>
          <ul>
            <li>
              To further test and demonstrate Gillian&apos;s parametricity,
              we&apos;re looking to add support for more source languages.
            </li>
            <li>
              Currently, Gillian supports our simple WHILE language, as well as
              C and JavaScript, with Rust on the horizon.
            </li>
            <li>
              This would broaden both our potential userbase, and our ability to
              evaluate against related tools for other languages.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li className="inactive">
            <em>Debugger:</em>
            more usability
          </li>
          <li className="inactive">
            <em>Gillian:</em>
            more languages
          </li>
          <li>
            <em>DAP extensions:</em>
            more use cases?
          </li>
        </ul>
        <Note>
          <ul>
            <li>
              As touched upon before, we think we might be onto something with
              our symbolic DAP extensions.
            </li>
            <li>
              If you think your tool could benefit from this protocol, or an
              interface like ours, do let us know!
            </li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
