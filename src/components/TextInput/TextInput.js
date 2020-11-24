import React from 'react';
import './TextInput.css';

const TextInput = ({
  id,
  label,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextInput;
