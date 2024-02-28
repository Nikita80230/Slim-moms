import { ChangeEvent, FC } from "react";

import { StyledInputGroup, StyledRadioGroup } from "./Styled";

type Props = {
  type?: "text" | "radio" | "password" | "email";
  className?: string;
  name: string;
  labelText: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  //FIX: VALUE
};

const InputGroup: FC<Props> = ({
  type = "text",
  className = "",
  name,
  labelText,
  required = false,
  disabled = false,
  onChange,
}) => {
  if (type === "radio") {
    return (
      <StyledRadioGroup className={className} $disabled={disabled}>
        <input
          onChange={onChange}
          type="radio"
          name={name}
          required={required}
          disabled={disabled}
        />
        <span className="fake" />
        <span className="radioWrapperSpan">
          {labelText}
          {required && "*"}
        </span>
      </StyledRadioGroup>
    );
  }
  return (
    <StyledInputGroup className={className} $disabled={disabled}>
      <input
        onChange={onChange}
        className="input"
        placeholder=" "
        type={type}
        name={name}
        required={required}
        disabled={disabled}
      />
      <span className="placeholder">
        {labelText}
        {required && "*"}
      </span>
    </StyledInputGroup>
  );
};

export default InputGroup;
