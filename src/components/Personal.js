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
          type="text"
          onChange={this.props.onNameChange}
        />
        <InputField
          input={true}
          className="address-input"
          label="Address"
          type="text"
          onChange={this.props.onAddressChange}
        />
        <InputField
          input={true}
          className="phone-input"
          label="Phone"
          type="text"
          onChange={this.props.onPhoneChange}
        />
        <InputField
          input={true}
          className="email-input"
          label="Email"
          type="text"
          onChange={this.props.onEmailChange}
        />
      </section>
    );
  }
}

export default Personal;
