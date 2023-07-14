import React from 'react';
import Title from './title';
import AboutGillian from './aboutGillian';
import ExecModes from './execModes';
import RelatedWork from './relatedWork';
import WhyDebug from './whyDebug';
import DebugIntro from './debugIntro';
import GillianHistory from './gillianHistory';
import Challenges from './challenges';
import Advantages from './advantages';
import Pipeline from './pipeline';
import StudentLab from './studentLab';
import Future from './future';
import Demo from './demo';
import Outtro from './outtro';

export default function Slides() {
  return (
    <>
      <Title />
      <AboutGillian />
      <ExecModes />
      <RelatedWork />
      <WhyDebug />
      <DebugIntro />
      <Pipeline />
      <GillianHistory />
      <Challenges />
      <Demo />
      <section>
        <p>Question mark</p>
        <p>Talk about related work?</p>
      </section>
      <Advantages />
      <StudentLab />
      <Future />
      <Outtro />
    </>
  );
}
