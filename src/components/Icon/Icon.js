import React from 'react';
import PropTypes from 'prop-types';

/** A super lame component that says Hello with a custom message. */
function Icon({message}) {
  return <div>Hello {message}</div>
}

Icon.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

Icon.defaultProps = {
  message: 'World'
};

export default Icon;
