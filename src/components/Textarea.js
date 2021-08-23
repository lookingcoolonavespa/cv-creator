import React from 'react';

const Textarea = (props) => {
  const { className, placeholder, value } = props;

  function handleChange(e) {
    props.onChange && props.onChange(e.target.value);
  }

  return (
    <textarea
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
      required={true}
      defaultValue={value}
    />
  );
};

export default Textarea;
