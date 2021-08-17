import React from 'react';
import './style/button.css';

const Button = (props) => (
  <button
    className={(props.className && props.className) || 'btn'}
    onClick={props.clickEvent}
    type={props.type || 'button'}
  >
    {props.text}
  </button>
);
export default Button;
