import React from 'react';
import Note from '../components/revealComponents/note';

export default function AboutMe() {
  return (
    <section>
      <h2>A bit about me</h2>
      <Note pad>First, a bit about me.</Note>
      <ul>
        <li className="fragment">
          Completed Masters&apos; thesis with Verified Software group @ Imperial
          <Note>
            I started the project as a masters&apos; student at Imperial...
          </Note>
        </li>
        <li className="fragment">
          Hired on as a researcher after graduating
          <Note>
            Came to the conclusion that my work wasn&apos;t finished...
          </Note>
        </li>
        <li className="em fragment">
          The project continues!
          <Note>And never left.</Note>
        </li>
      </ul>
    </section>
  );
}
