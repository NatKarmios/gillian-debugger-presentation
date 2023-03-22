import React from 'react';

import fileLogScrollVid from '../img/file_log_scroll.mp4';
import vscodeLogImg from '../img/vscode_log.png';
import thisIsFineImg from '../img/this-is-fine.gif';
import debuggerImg from '../img/debugger.png';

export default function WhyDebug() {
  return (
    <>
      <section className="why-debug">
        <section data-auto-animate>
          <h2>Why do we need a debugger?</h2>
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
        </section>
      </section>
      <section>
        <section data-auto-animate>
          <p>Can we do better?</p>
        </section>
        <section data-auto-animate>
          <p>Can we do better?</p>
          <p>Here&apos;s our progress.</p>
          <img
            src={debuggerImg}
            alt="A screenshot of the new debugger interface"
          />
        </section>
      </section>
    </>
  );
}
