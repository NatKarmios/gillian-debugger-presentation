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
            <li>Now that we have a working debugger, we need users!</li>
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
            <li>And what better source is there than students?</li>
            <li>
              Last November, we ran a 2-hour lab at the end of Philippa&apos;s
              separation logic course, where students used the debugger to fix
              the specs of list algorithms.
            </li>
            <li>The feedback was overwhelmingly positive!</li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
