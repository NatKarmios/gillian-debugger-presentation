import React from 'react';
import Note from '../components/revealComponents/note';

import fileLogScrollVid from '../img/file_log_scroll.mp4';
import vscodeLogImg from '../img/vscode_log.png';
import thisIsFineImg from '../img/this-is-fine.gif';

export default function WhyDebug() {
  return (
    <section className="why-debug">
      <section data-auto-animate>
        <h2>Why do we need a debugger?</h2>
        <Note>
          <ul>
            <li>But why do we even need a debugger?</li>
          </ul>
        </Note>
      </section>
      <section
        data-auto-animate
        data-background-video={fileLogScrollVid}
        data-background-video-loop
        data-background-video-muted
      >
        <h2>Why do we need a debugger?</h2>
        <p>Because this is the alternative.</p>
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
        <p className="fragment">
          Tens of thousands of lines for a basic toy program; easily tens of
          millions for real-world programs.
        </p>
        <Note>
          <ul>
            <li>
              Because this is what we have now; gigabytes of text, ctrl+f, and a
              dream. &lt;RET&gt;
            </li>
            <li>
              Verifying even a basic program in a toy language logs tens of
              thousands of lines.
            </li>
            <li>
              A modest real-world program easily reaches tens of millions.
            </li>
          </ul>
        </Note>
      </section>
    </section>
  );
}
