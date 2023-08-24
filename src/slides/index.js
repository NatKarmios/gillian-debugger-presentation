import React from 'react';
import Title from './title';
import AboutMe from './aboutMe';
import AboutGillian from './aboutGillian';
import WhyDebug from './whyDebug';
import DebugIntro from './debugIntro';
import Advantages from './advantages';
import Future from './future';
import Outtro from './outtro';

export default function Slides() {
  return (
    <>
      <Title />
      <AboutMe />
      <AboutGillian />
      <WhyDebug />
      <DebugIntro />
      <Advantages />
      <Future />
      <Outtro />
    </>
  );
}
