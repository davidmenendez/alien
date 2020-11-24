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
  const onChangeHandler = e => onChange(e.target.value);

  return (
    <div className="text-input">
      <label for={id}>{label}</label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

export default TextInput;
