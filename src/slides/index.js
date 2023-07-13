import React from 'react';
import Title from './title';
import AboutGillian from './aboutGillian';
import ExecModes from './execModes';
import WhyDebug from './whyDebug';
import DebugIntro from './debugIntro';
import GillianHistory from './gillianHistory';
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
      <WhyDebug />
      <DebugIntro />
      <GillianHistory />
      <Pipeline />
      <Demo />
      <StudentLab />
      <Future />
      <Outtro />
    </>
  );
}
