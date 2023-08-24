import React from 'react';
import Note from '../components/revealComponents/note';

import fileLogScrollVid from '../img/file_log_scroll.mp4';
import vscodeLogImg from '../img/vscode_log.png';
import thisIsFineImg from '../img/this-is-fine.gif';

export default function WhyDebug() {
  return (
    <section className="gillian-logs-bad">
      <section data-auto-animate>
        <h2>Why make a debugger?</h2>
        <Note>So why do we need a debugger anyway?</Note>
      </section>
      <section
        data-auto-animate
        data-background-video={fileLogScrollVid}
        data-background-video-loop
        data-background-video-muted
      >
        <h2>Why make a debugger?</h2>
        <p>Because this is the alternative.</p>
        <div className="row">
          <img src={vscodeLogImg} style={{ width: '400px' }} />
          <img src={thisIsFineImg} style={{ width: '150px' }} />
        </div>
        <Note pad>
          Because before, we had the BIGGEST dumpster fire of a log file - way
          too verbose, and lots of repetition.
        </Note>
        <p className="fragment">
          <i>Way</i> too much logging!
          <Note>
            A toy program would log tens of thousands of lines, and real-world
            examples easily reach tens of millions.
          </Note>
        </p>
      </section>
    </section>
  );
}
