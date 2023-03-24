import React from 'react';
import Title from './title';
import AboutGillian from './aboutGillian';
import ExecModes from './execModes';
import WhyDebug from './whyDebug';
import Challenges from './challenges';
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
      <Challenges />
      <StudentLab />
      <Demo />
      <Future />
      <Outtro />
    </>
  );
}
