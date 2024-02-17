import { FC } from "react";
import { NavButtonProps } from "./NavButton.types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavButtonComponent = styled.span`
  display: flex;
  min-width: 154px;
  padding: 0px 11px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
`;

const active = {
  background: "rgba(69, 10, 208, 0.10)",
};

const NavButton: FC<NavButtonProps> = ({ isActive, children, to }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <NavButtonComponent style={isActive ? active : {}}>
        {children}
      </NavButtonComponent>
    </NavLink>
  );
};

export default NavButton;
