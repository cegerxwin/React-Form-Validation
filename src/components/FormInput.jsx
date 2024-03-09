import { useState } from "react";
import { string, func } from "prop-types";
import "./FormInput.css";

function FormInput({
  label,
  onChange,
  name,
  type,
  pattern,
  errorMessage,
  ...input
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        pattern={pattern}
        onChange={onChange}
        {...input}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;

FormInput.propTypes = {
  label: string,
  onChange: func,
  name: string,
  type: string,
  pattern: string,
  errorMessage: string,
};
