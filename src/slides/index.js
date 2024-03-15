import React from 'react';
import Title from './title';
import AboutMe from './aboutMe';
import AboutGillian from './aboutGillian';
import WhyDebug from './whyDebug';
import DebugIntro from './debugIntro';
import Advantages from './advantages';
import Future from './future';
import Outtro from './outtro';
import Note from '../components/revealComponents/note';

export default function Slides() {
  return (
    <>
      <Title />
      <AboutMe />
      <AboutGillian />
      <WhyDebug />
      <DebugIntro />
      <section>
        <h2>Quick demo!</h2>
        <Note>[DO DEMO]</Note>
      </section>
      <Advantages />
      <Future />
      <Outtro />
    </>
  );
}
