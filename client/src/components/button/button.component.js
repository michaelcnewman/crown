import React from 'react';
import './button.styles.scss';

const Button = ({ children, isGoggleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoggleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
