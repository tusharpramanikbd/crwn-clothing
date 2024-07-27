import { ChangeEvent, FC } from "react";
import { FormInputLabel, Input, Group } from "./InputField.styles";

type InputFieldProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  value: string;
  isRequired: boolean;
  labelText: string;
};

const InputField: FC<InputFieldProps> = ({
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
        <FormInputLabel shrink={!!value.length}>{labelText}</FormInputLabel>
      )}
    </Group>
  );
};

export default InputField;
