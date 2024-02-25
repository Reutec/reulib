import { FC } from "react";
import { BasicButtonProps } from "./BasicButton.types";

const BasicButton: FC<BasicButtonProps> = (props) => {
  const {
    children,
    showPictoAdd,
    backgroundColor = "darkBlue",
    isDarkText,
    ...rest
  } = props;
  const buttonDefaultStyles = {
    display: "flex",
    minHeight: "46px",
    padding: "11px 12px",
    margin: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    border: "none",
    borderRadius: "8px",
    background: `var(--${backgroundColor})`,
  };

  const textButtonStyles = {
    color: isDarkText ? "var(--tundora)" : "#FFF", // Si isPrimary est vrai, la couleur sera blanche. Sinon, elle sera noire.

    fontFamily: "Inter",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  };
  const buttonStyles = {
    ...rest.style,
    ...buttonDefaultStyles,
  };
  return (
    <button style={buttonStyles} {...rest}>
      {showPictoAdd && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span style={textButtonStyles}>{children}</span>
    </button>
  );
};
export default BasicButton;
