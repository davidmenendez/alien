import React from 'react';
import './Button.scss';

const Button = ({
  type,
  disabled,
  onClick,
  children,
  className,
}) => {
  const classes = ['button'];
  if (className) classes.push(className);

  if (type === 'primary') classes.push('button--primary');
  else if (type === 'secondary') classes.push('button--secondary');

  return (
    <button
      className={classes.join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
