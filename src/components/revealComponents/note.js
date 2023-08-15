import React from 'react';
import PropTypes from 'prop-types';
import { pdfModeEnabled } from '../../config';

export default function Note({
  pad = false,
  fragment = false,
  children,
  ...props
}) {
  let className = 'notes';
  if (fragment) className += ' fragment';
  let padElem;
  if (pad) {
    if (pdfModeEnabled) {
      // padElem = (
      //   <>
      //     <br />
      //     <br />
      //     <p>
      //       <i>Ignore below here, weird technical bug</i>
      //     </p>
      //   </>
      // );
    } else {
      padElem = <div style={{ height: '100vh' }} />;
    }
  }
  return (
    <aside className={className} {...props}>
      <p>{children}</p>
      {padElem}
    </aside>
  );
}

Note.propTypes = {
  pad: PropTypes.bool,
  fragment: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
