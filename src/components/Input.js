import React, { Component } from 'react';
import './style/input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange && this.props.onChange(e.target.value);
  }

  render() {
    const { className, type, name, value, pattern, placeholder } = this.props;

    return (
      <input
        type={type}
        name={name}
        defaultValue={value}
        className={className}
        placeholder={placeholder}
        onChange={this.handleChange}
        required={true}
        pattern={pattern || '.*'}
      />
    );
  }
}

export default Input;
