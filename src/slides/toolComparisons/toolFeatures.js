import React from 'react';
import Note from '../../components/revealComponents/note';

export default function ToolFeatures() {
  return (
    <section>
      <section data-auto-animate>
        <p>What features do we want?</p>
        <Note>
          Let&apos;s have a think about what features we want from a tool like
          Gillian.
        </Note>
      </section>
      <section data-auto-animate>
        <p>What features do we want?</p>
        <ul>
          <li>View traces</li>
        </ul>
        <Note>At the bare minimum, we need to look at execution traces</Note>
      </section>
      <section data-auto-animate>
        <p>What features do we want?</p>
        <ul>
          <li>View traces</li>
          <li>Interactive debugging</li>
        </ul>
        <Note>Ideally, we want a debugger we can interact with...</Note>
      </section>
      <section data-auto-animate>
        <p>What features do we want?</p>
        <ul>
          <li>View traces</li>
          <li>Interactive debugging</li>
          <li>Visual debugging</li>
        </ul>
        <Note>...and one that gives an intuitive view of the trace.</Note>
      </section>
      <section data-auto-animate>
        <p>What features do we want?</p>
        <ul>
          <li>View traces</li>
          <li>Interactive debugging</li>
          <li>Visual debugging</li>
          <li>Flow control</li>
        </ul>
        <Note>
          Since symbolic execution can branch, it&apos;d be nice to choose where
          execution goes.
        </Note>
      </section>
      <section data-auto-animate>
        <p>What features do we want?</p>
        <ul>
          <li>View traces</li>
          <li>Interactive debugging</li>
          <li>Visual debugging</li>
          <li>Flow control</li>
          <li>Compositionality</li>
        </ul>
        <Note>
          <p>
            Compositionality means that a function&apos;s spec can be used when
            it&apos;s called instead of actually executing it.
          </p>
          <p>
            This is a big win for scalability, as only changed code needs to be
            re-verified.
          </p>
        </Note>
      </section>
      <section data-auto-animate>
        <p>What features do we want?</p>
        <ul>
          <li>View traces</li>
          <li>Interactive debugging</li>
          <li>Visual debugging</li>
          <li>Flow control</li>
          <li>Compositionality</li>
        </ul>
        <p>
          <em>How are other tools doing?</em>
        </p>
        <Note>To set the scene, let&apos;s see how other tools stack up.</Note>
      </section>
    </section>
  );
}
