import React from 'react';
import './style/input.css';

const Input = (props) => {
  const { className, type, name, value, pattern, placeholder } = props;

  function handleChange(e) {
    props.onChange && props.onChange(e.target.value);
  }

  return (
    <input
      type={type}
      name={name}
      defaultValue={value}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      required={true}
      pattern={pattern || '.*'}
    />
  );
};

export default Input;
