import { FC } from "react";
import { ToasterProps } from "./Toaster.types";
import "./style.scss";
import styled, { keyframes } from "styled-components";

const tagDefaultStyles = {
  display: "inline-flex",
  padding: "4px 8px",
  margin: "10px 10px",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  borderRadius: "4px",
  fontSize: "15px",
};

type TagTypes = {
  [key: string]: {
    backgroundColor: string;
    color?: string;
  };
};

const tagTypes: TagTypes = {
  info: {
    backgroundColor: "var(--primary)",
    color: "var(--white)",
  },
};
const slideIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const AnimatedSpan = styled.span`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${slideIn} 600ms ease-out forwards,
    ${slideOut} 600ms ease-out 4s forwards;
`;

const Toaster: FC<ToasterProps> = ({ children, type }) => {
  const tagStyle = {
    ...tagDefaultStyles,
    backgroundColor: tagTypes[type]?.backgroundColor || "#fff",
    color: tagTypes[type]?.color || "#000",
  };

  return <AnimatedSpan style={tagStyle}>{children} </AnimatedSpan>;
};

export default Toaster;
