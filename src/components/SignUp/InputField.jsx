import React from "react";

const InputField = ({
  handleChange,
  type,
  name,
  value,
  isRequired,
  labelText,
}) => {
  return (
    <>
      <label>{labelText}</label>
      <input
        type={type}
        required={isRequired}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </>
  );
};

export default InputField;
