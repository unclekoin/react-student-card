import React from 'react';

const TextField = ({
  label,
  type = 'text',
  name,
  value,
  error,
  max,
  min,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
