import { FC } from "react";
import { GestionGeneraleProps } from "./GestionGenerale.types";
import styled from "styled-components";
import "./style.scss";

const GestionGeneraleComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GestionCompte: FC<GestionGeneraleProps> = ({ children }) => {
  return <GestionGeneraleComponent id="sidebar">{children}</GestionGeneraleComponent>;
};

export default GestionCompte;
