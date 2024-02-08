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
  // Récupérer l'image en fonction du nom de l'icône
  const iconPath = "/reulib/src/icons/" + iconName + ".svg";
  const iconStyles = {
    ...iconSizes[size || "small"],
    ...style,
  };
  return <img src={iconPath} alt={altText || iconName} style={iconStyles} />;
};

export default Icon;
