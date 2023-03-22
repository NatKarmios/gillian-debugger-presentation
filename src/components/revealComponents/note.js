import React from 'react';
import PropTypes from 'prop-types';

export default function Note({ children }) {
  return <aside className="notes">{children}</aside>;
}

Note.propTypes = {
  children: PropTypes.node.isRequired,
};
