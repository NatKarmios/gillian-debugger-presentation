import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import PropTypes from 'prop-types';
import revealOptions from './revealOptions';
import wislHighlight from './wislHighlight';

export default function Deck({ options, children }) {
  useEffect(() => {
    Reveal.initialize({
      ...revealOptions,
      ...options,
      highlight: {
        beforeHighlight: (hljs) => hljs.registerLanguage('wisl', wislHighlight),
      },
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
