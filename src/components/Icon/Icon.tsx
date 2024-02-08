import { FC } from "react";
import { IconProps } from "./Icon.types";

const iconSizes = {
  small: {
    width: "24px",
    height: "24px",
  },
  medium: {
    width: "36px",
    height: "36px",
  },
  large: {
    width: "48px",
    height: "48px",
  },
};

const Icon: FC<IconProps> = ({ size, style, iconName, altText }) => {
  const iconStyles = {
    ...iconSizes[size || "small"],
    ...style,
  };

  const iconPath = "/icons/" + iconName + ".svg";
  return <img src={iconPath} alt={altText || iconName} style={iconStyles} />;
};

export default Icon;
