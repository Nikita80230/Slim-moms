import { FC } from "react";

import { StyledInputGroup, StyledRadioGroup } from "./Styled";

type Props = {
  type?: "text" | "radio" | "password" | "email";
  className?: string;
  name: string;
  labelText: string;
  required?: boolean;
  disabled?: boolean;
  //FIX: VALUE
};

const InputGroup: FC<Props> = ({
  type = "text",
  className = "",
  name,
  labelText,
  required = false,
  disabled = false,
}) => {
  if (type === "radio") {
    return (
      <StyledRadioGroup className={className} $disabled={disabled}>
        <input
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
