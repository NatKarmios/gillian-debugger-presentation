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
            &nbsp;more usability
          </li>
        </ul>
        <Note>
          <ul>
            <li>
              User experience is the core motivation of the debugger, so
              we&apos;ll continue to focus on it.
            </li>
            <li>
              Of course we&apos;ll improve navigation, error reporting, and the
              like, but we really want to ask: could you see yourself, or your
              team, using this debugger?
            </li>
            <li>
              If not, is it because we&apos;re missing something, such as
              bi-abduction?
            </li>
            <li>And regardless, what do you think we should focus on?</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li className="inactive">
            <em>Debugger:</em>
            &nbsp;more usability
          </li>
          <li>
            <em>Gillian:</em>
            &nbsp;more languages
          </li>
        </ul>
        <Note>
          <ul>
            <li>
              Currently, we support our simple WHILE language, as well as C and
              JavaScript, with Sacha hard at work on Rust.
            </li>
            <li>
              To further establish Gillian&apos;s parametricity, we want to
              support more source languages, so we can appeal to more users, and
              evaluate against more tools in the field.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li className="inactive">
            <em>Debugger:</em>
            &nbsp;more usability
          </li>
          <li className="inactive">
            <em>Gillian:</em>
            &nbsp;more languages
          </li>
          <li>
            <em>DAP extensions:</em>
            &nbsp;more use cases?
          </li>
        </ul>
        <Note>
          <ul>
            <li>
              As touched upon before, we think we might be onto something with
              our symbolic DAP extensions, something more than just Gillian.
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
