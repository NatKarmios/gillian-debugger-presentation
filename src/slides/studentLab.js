import React from 'react';
import Note from '../components/revealComponents/note';
import SachaLabImg from '../img/lab-sacha.jpg';
import NatLabImg from '../img/lab-nat.jpg';

export default function StudentLab() {
  return (
    <section className="student-lab">
      <section data-auto-animate>
        <h2>Has anyone even used it?</h2>
        <Note>
          <ul>
            <li>
              Of course, we won&apos;t know if it&apos;s any good if
              nobody&apos;s used it
            </li>
          </ul>
        </Note>
      </section>
      <section data-auto-animate>
        <h2>Has anyone even used it?</h2>
        <p>Yes!</p>
        <div className="row">
          <img src={SachaLabImg} alt="The student lab, featuring Sacha" />
          <img src={NatLabImg} alt="The student lab, featuring Nat" />
        </div>
        <p>
          <em>Student lab, November 2022</em>
        </p>
        <Note>
          <ul>
            <li>Luckily, we have students for that!</li>
            <li>
              Last November, we ran a 2-hour lab at the end of course on
              separation logic, where students used the debugger to fix the
              specs of list algorithms.
            </li>
            <li>The feedback was overwhelmingly positive!</li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
