import { FC } from "react";
import { LightButtonProps } from "./LightButton.types";
import { Icon } from "../Icon";
const buttonDefaultStyles = {
  display: "flex",
  width: "280px",
  padding: "8px 4px",
  margin: "10px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  border: "none",
  borderRadius: "8px",
  background: "var(--lightButton)",
};

const textButtonStyles = {
  color: "var(--darkBlue)",
  display: "flex",
  alignItems: "center",
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "14px",
  fontStyle: "normal",
  lineHeight: "normal",
};

const LightButton: FC<LightButtonProps> = (props) => {
  const { children, iconName, ...rest } = props;
  const buttonStyles = {
    ...rest.style,
    ...buttonDefaultStyles,
  };
  return (
    <button style={buttonStyles} {...rest}>
      <span style={textButtonStyles}>
        {iconName && <Icon iconName={iconName} />}
        <span style={{ marginLeft: "8px" }}>{children}</span>
      </span>
    </button>
  );
};
export default LightButton;
