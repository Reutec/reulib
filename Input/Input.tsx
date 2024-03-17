import { forwardRef } from "react";
import { InputProps } from "./Input.types";
import "./style.scss";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, inputName, ...props }, ref) => {
    return (
      <div className="input-layout">
        <p className="input-text">{inputName}</p>
        <input
          className="input-box"
          placeholder={placeholder}
          type={type}
          min={type === "number" ? 1 : undefined}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
