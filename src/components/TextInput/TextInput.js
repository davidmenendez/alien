import React from 'react';
import './TextInput.scss';

const TextInput = ({
  id,
  label,
  onChange,
  placeholder,
  type,
  value,
}) => (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="input"
        autoComplete="off"
      />
    </div>
  );

export default TextInput;
