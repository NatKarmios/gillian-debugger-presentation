import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import PropTypes from 'prop-types';
import revealOptions from './revealOptions';

export default function Deck({ options, children }) {
  useEffect(() => {
    Reveal.initialize({
      plugins: [RevealNotes],
      ...revealOptions,
      ...options,
    });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
}

Deck.propTypes = {
  options: PropTypes.shape({ revealOptions }),
  children: PropTypes.node.isRequired,
};
