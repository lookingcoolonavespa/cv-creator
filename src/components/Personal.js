import React from 'react';
import InputField from './InputField.js';
import './style/Personal.css';

const Personal = (props) => (
  <section id="personal">
    <InputField
      input={true}
      className="name-input"
      label="Name"
      name="name"
      type="text"
      onChange={props.onNameChange}
      value={props.nameVal}
    />
    <InputField
      input={true}
      className="address-input"
      label="Address"
      name="address"
      type="text"
      onChange={props.onAddressChange}
      value={props.addressVal}
    />
    <InputField
      input={true}
      className="phone-input"
      label="Phone"
      name="phone"
      pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
      type="text"
      onChange={props.onPhoneChange}
      value={props.phoneVal}
    />
    <InputField
      input={true}
      className="email-input"
      label="Email"
      name="email"
      type="email"
      onChange={props.onEmailChange}
      value={props.emailVal}
    />
  </section>
);

export default Personal;
