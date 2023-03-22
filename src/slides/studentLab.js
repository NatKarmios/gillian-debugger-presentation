import React from 'react';
import SachaLabImg from '../img/lab-sacha.jpg';
import NatLabImg from '../img/lab-nat.jpg';

export default function StudentLab() {
  return (
    <section className="student-lab">
      <section data-auto-animate>
        <h2>Has anyone even used it?</h2>
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
      </section>
    </section>
  );
}
