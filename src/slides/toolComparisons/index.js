import React from 'react';
import CBMC from './cmbc';
import Comparison from './comparison';
import GillianLogsAreBad from './gillianLogsAreBad';
import InferPulse from './infer-pulse';
import KeY from './key';
import VeriFast from './verifast';
import ToolFeatures from './toolFeatures';

export default function ToolComparisons() {
  return (
    <>
      <ToolFeatures />
      <section>
        <CBMC />
        <KeY />
        <VeriFast />
        <InferPulse />
        <Comparison />
      </section>
      <GillianLogsAreBad />
    </>
  );
}
