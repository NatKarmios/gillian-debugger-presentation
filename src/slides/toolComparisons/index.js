import React from 'react';
import CBMC from './cmbc';
import Comparison from './comparison';
import GillianLogsAreBad from './gillianLogsAreBad';
import InferPulse from './infer-pulse';
import KeY from './key';
import VeriFast from './verifast';

export default function ToolComparisons() {
  return (
    <>
      <section>
        <section>
          <h2 className="title">Related tools</h2>
          <p className="subtitle">How do they stack up?</p>
        </section>
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
