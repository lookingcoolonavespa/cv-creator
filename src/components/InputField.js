import React from 'react';
import Input from './Input.js';
import Textarea from './Textarea.js';

import './style/InputField.css';

const InputField = ({ label, input, ...inputProps }) => (
  <div className="input-field">
    {label && <label>{label}</label>}
    {input === true && <Input {...inputProps} />}
    {input === false && <Textarea {...inputProps} />}
  </div>
);

export default InputField;
