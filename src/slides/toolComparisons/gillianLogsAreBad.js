import React from 'react';
import Note from '../../components/revealComponents/note';

import fileLogScrollVid from '../../img/file_log_scroll.mp4';
import vscodeLogImg from '../../img/vscode_log.png';
import thisIsFineImg from '../../img/this-is-fine.gif';

export default function GillianLogsAreBad() {
  return (
    <section className="gillian-logs-bad">
      <section data-auto-animate>
        <h2>What about Gillian?</h2>
        <Note>So what did Gillian have?</Note>
      </section>
      <section
        data-auto-animate
        data-background-video={fileLogScrollVid}
        data-background-video-loop
        data-background-video-muted
      >
        <h2>What about Gillian?</h2>
        <p>Yikes!</p>
        <div className="row">
          <img
            src={vscodeLogImg}
            style={{ width: '400px' }}
            alt="VSCode failing to open a too-large log file"
          />
          <img
            src={thisIsFineImg}
            style={{ width: '150px' }}
            alt="this is fine"
          />
        </div>
        <Note pad>
          Only the BIGGEST dumpster fire of a log file - way too verbose, and
          lots of repetition.
        </Note>
        <p className="fragment">
          <i>Way</i> too much logging!
          <Note>
            A toy program would log tens of thousands of lines, and real-world
            examples easily reach tens of millions.
          </Note>
        </p>
        <p className="fragment">
          <em>We need to do better!</em>
          <Note>
            I hope, from this, you can see how motivated we were to improve.
          </Note>
        </p>
      </section>
    </section>
  );
}
