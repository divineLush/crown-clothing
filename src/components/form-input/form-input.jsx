import React from 'react';

import './form-input.scss';

const FormInput = ({ handleChange, label, ...props }) => {
  const formLabel = (() => {
    const modifier = props.value.length ? ' _shrink' : '';
    const labelClass = `group__form-label${modifier}`;

    return label
      ? <label className={ labelClass }>{ label }</label>
      : null;
  })();

  return (
    <section className="group">
      <input
        className="group__form-input"
        onChange={ handleChange }
        { ...props }
      />
      { formLabel }
    </section>
  );
};

export default FormInput;
