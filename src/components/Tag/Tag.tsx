import { FC } from "react";
import { TagProps } from "./Tag.types";

const tagDefaultStyles = {
  display: "inline-flex",
  padding: "4px 8px",
  margin: "10px 10px",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  borderRadius: "4px",
};

type TagTypes = {
  [key: string]: {
    backgroundColor: string;
    text: string;
  };
};

const tagTypes: TagTypes = {
  IN_CIRCULATION: {
    backgroundColor: "#3abbb366",
    text: "En circulation",
  },
  IN_COMPANY: {
    backgroundColor: "#DBDBDB",
    text: "e-commercant",
  },
  IN_PRODUCTION: {
    backgroundColor: "#EDE7FB",
    text: "En production",
  },
  OUT_SERVICE: {
    backgroundColor: "#F7C59F",
    text: "Hors service",
  },
  ON_DOCK: {
    backgroundColor: "#aff8b899",
    text: "Sur le quai",
  },
};

const Tag: FC<TagProps> = ({ type }) => {
  const tagStyle = {
    ...tagDefaultStyles,
    backgroundColor: tagTypes[type]?.backgroundColor || "#fff",
  };

  return (
    <span style={tagStyle}>{tagTypes[type]?.text || "Type inconnu"} </span>
  );
};

export default Tag;
