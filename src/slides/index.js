import React from 'react';
import Title from './title';
import AboutGillian from './aboutGillian';
import ToolComparisons from './toolComparisons';
import TechnicalDetails from './technicalDetails';
import Advantages from './advantages';
import StudentLab from './studentLab';
import Future from './future';
import Demo from './demo';
import Outtro from './outtro';
import MastersProjects from './mastersProjects';

export default function Slides() {
  return (
    <>
      <Title />
      <AboutGillian />
      <ToolComparisons />
      <MastersProjects />
      <Demo />
      <TechnicalDetails />
      <Advantages />
      <StudentLab />
      <Future />
      <Outtro />
    </>
  );
}
