import { FC } from "react";
import { GestionCompteProps } from "./GestionCompte.types";
import styled from "styled-components";
import "./style.scss";

const GestionCompteComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 355px;
`;

const GestionGenerale: FC<GestionCompteProps> = ({ children }) => {
  return (
    <GestionCompteComponent id="sidebar">{children}</GestionCompteComponent>
  );
};

export default GestionGenerale;
