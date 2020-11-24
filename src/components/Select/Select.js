import React from 'react';
import './Select.scss';

const Select = ({
  id,
  label,
  onChange,
  options,
  value,
}) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        onChange={onChange}
        value={value}
      >
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default Select;
