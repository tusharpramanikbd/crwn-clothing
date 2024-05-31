import React from "react";
import "./InputField.styles.scss";

const InputField = ({
  handleChange,
  type,
  name,
  value,
  isRequired,
  labelText,
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        required={isRequired}
        onChange={handleChange}
        name={name}
        value={value}
      />
      {labelText && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {labelText}
        </label>
      )}
    </div>
  );
};

export default InputField;
