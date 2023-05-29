import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, name, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {name}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
