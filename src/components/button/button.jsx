import React from 'react';

import './button.scss';

const Button = ({ children, modifier, ...props }) => {
  const classModifier = modifier ? ` _${modifier}` : '';
  const btnClass = `button${classModifier}`;

  return (
    <button className={ btnClass } { ...props }>
      { children }
    </button>
  );
}

export default Button;
