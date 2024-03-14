import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import PropTypes from 'prop-types';
import revealOptions from './revealOptions';
import wislHighlight from './wislHighlight';

export default function Deck({ options, children }) {
  const deckDivRef = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      ...revealOptions,
      ...options,
      highlight: {
        beforeHighlight: (hljs) => hljs.registerLanguage('wisl', wislHighlight),
      },
    });

    deckRef.current.initialize();

    // eslint-disable-next-line consistent-return
    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Reveal.js destroy call failed.');
      }
    };
  });

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
}

Deck.propTypes = {
  options: PropTypes.shape({ revealOptions }),
  children: PropTypes.node.isRequired,
};
