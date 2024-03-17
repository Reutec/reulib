import { FC } from "react";
import { GestionOutilsProps } from "./GestionOutils.types";
import styled from "styled-components";
import "./style.scss";

const GestionOutilsComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`;

const GestionOutils: FC<GestionOutilsProps> = ({ children }) => {
  return (
    <GestionOutilsComponent id="sidebar">{children}</GestionOutilsComponent>
  );
};

export default GestionOutils;
