import React, { Component } from 'react';
import InputField from './InputField.js';

class Personal extends Component {
  render() {
    return (
      <section>
        <InputField
          className="name-input"
          label="Name"
          type="text"
          onChange={this.props.onNameChange}
        />
        <InputField
          className="address-input"
          label="Address"
          type="text"
          onChange={this.props.onAddressChange}
        />
        <InputField
          className="phone-input"
          label="Phone"
          type="text"
          onChange={this.props.onPhoneChange}
        />
        <InputField
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
