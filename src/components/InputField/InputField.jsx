import React from "react";
import { FormInputLabel, Input, Group } from "./InputField.styles";

const InputField = ({
  handleChange,
  type,
  name,
  value,
  isRequired,
  labelText,
}) => {
  return (
    <Group>
      <Input
        type={type}
        required={isRequired}
        onChange={handleChange}
        name={name}
        value={value}
      />
      {labelText && (
        <FormInputLabel shrink={value.length}>{labelText}</FormInputLabel>
      )}
    </Group>
  );
};

export default InputField;
