import React, { Component } from 'react';
import InputField from './InputField.js';
import './style/Personal.css';

class Personal extends Component {
  render() {
    return (
      <section id="personal">
        <InputField
          input={true}
          className="name-input"
          label="Name"
          name="name"
          type="text"
          onChange={this.props.onNameChange}
          value={this.props.nameVal}
        />
        <InputField
          input={true}
          className="address-input"
          label="Address"
          name="address"
          type="text"
          onChange={this.props.onAddressChange}
          value={this.props.addressVal}
        />
        <InputField
          input={true}
          className="phone-input"
          label="Phone"
          name="phone"
          pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
          type="text"
          onChange={this.props.onPhoneChange}
          value={this.props.phoneVal}
        />
        <InputField
          input={true}
          className="email-input"
          label="Email"
          name="email"
          type="email"
          onChange={this.props.onEmailChange}
          value={this.props.emailVal}
        />
      </section>
    );
  }
}

export default Personal;
