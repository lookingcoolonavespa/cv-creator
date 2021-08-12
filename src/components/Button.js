import React from 'react';

const Button = (props) => (
  <button className="btn" onClick={props.clickEvent} type="button">
    {props.text}
  </button>
);
export default Button;
