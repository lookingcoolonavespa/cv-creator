import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this.props.onChange, e);
    this.props.onChange && this.props.onChange(e.target.value);
  }

  render() {
    const { className, type, value } = this.props;

    return (
      <input
        type={type}
        className={className}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
