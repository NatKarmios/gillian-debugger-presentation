import React from 'react';
import Title from './title';
import AboutGillian from './aboutGillian';
import ToolComparisons from './toolComparisons';
// import DebugIntro from './debugIntro';
// import GillianHistory from './gillianHistory';
import TechnicalDetails from './technicalDetails';
import Advantages from './advantages';
// import Pipeline from './pipeline';
import StudentLab from './studentLab';
import Future from './future';
import Demo from './demo';
import Outtro from './outtro';

export default function Slides() {
  return (
    <>
      <Title />
      <AboutGillian />
      <Demo />
      <ToolComparisons />
      {/* <DebugIntro /> */}
      {/* <Pipeline /> */}
      {/* <GillianHistory /> */}
      <TechnicalDetails />
      <Advantages />
      <StudentLab />
      <Future />
      <Outtro />
    </>
  );
}
