import React from 'react';
import Note from '../components/revealComponents/note';

export default function Future() {
  return (
    <section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box" />
        <Note>
          <ul>
            <li>Looking to the future...</li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li>Gillian 2.0</li>
        </ul>
        <Note>
          <ul>
            <li>
              As we continue to improve Gillian and the theory behind it,
              we&apos;re considering major changes to Gillian&apos;s internals.
            </li>
            <li>
              This will involve an emphasis on developer experience, increasing
              the viability of your team&apos;s language being verifiable in
              Gillian.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li className="inactive">Gillian 2.0</li>
          <li>More source languages!</li>
        </ul>
        <Note>
          <ul>
            <li>
              To further test and demonstrate Gillian&apos;s parametricity,
              we&apos;re looking to add support for more source languages.
            </li>
            <li>
              currently, Gillian supports a simple WHILE language, C, and
              JavaScript, with Rust on the horizon.
            </li>
            <li>
              This will broaden both our potential userbase, and our ability to
              evaluate against related but language-specific tools.
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Where to next?</h2>
        <ul className="box">
          <li className="inactive">Gillian 2.0</li>
          <li className="inactive">More source languages!</li>
          <li>Symbolic DAP extension</li>
        </ul>
        <Note>
          <ul>
            <li>
              As touched upon before, we think we might be onto something with
              our symbolic DAP extensions; if you think your tool could benefit
              from this protocol, or an interface like ours, do let us know!
            </li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
