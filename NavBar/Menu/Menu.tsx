import { FC } from "react";
import { MenuProps } from "./Menu.types";
import "./style.scss";
import styled from "styled-components";
import NavLogo from "../NavLogo/NavLogo";

const MenuLayout = styled.aside`
  display: inline-flex;
  height: 1024px;
  padding: 32px 11px;
  flex-direction: column;
  background: #fff;
  box-shadow: 5px 0 5px -2px rgba(0, 0, 0, 0.25);
  margin-right: 17px;
`;

const Menu: FC<MenuProps> = ({ children }) => {
  return (
    <>
      <MenuLayout>
        <NavLogo />
        {children}
      </MenuLayout>
    </>
  );
};

export default Menu;
