import React from 'react';
import './button.styles.scss';

const Button = ({ children, isGoggleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoggleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
