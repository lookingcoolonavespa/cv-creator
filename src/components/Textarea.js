import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange && this.props.onChange(e.target.value);
  }

  render() {
    const { className, placeholder, value } = this.props;

    return (
      <textarea
        className={className}
        onChange={this.handleChange}
        placeholder={placeholder}
        required={true}
        defaultValue={value}
      />
    );
  }
}

export default Textarea;
