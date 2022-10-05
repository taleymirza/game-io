import styled from "styled-components";
import { colors, viewports } from "../../../styles";

const GameContainer = styled.div`
  display: flex;
  flex-flow: row;
  padding: 24px;
  justify-content: center;
  height: calc(100vh - 160px);
`;

const Container = styled.div<{ hideOnMobile?: boolean }>`
  display: ${(p) => (p.hideOnMobile ? "none" : "flex")};
  flex-direction: column;
  min-width: 269px;
  padding: 0 16px 0 0;
  height: 100%;
  @media ${viewports.tablet} {
    display: flex;
  }
`;
const Label = styled.div`
  padding: 20px 0 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavItem = styled.button<{ $selected?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 64px;
  text-decoration: none;
  background-color: ${(p) =>
    p.$selected ? colors.transactionRegular : colors.white};
  color: ${colors.brandRegular};
  align-items: center;
  padding: 0 24px;
  border: none;
  border-bottom: 1px solid #d7d7d7;

  & h3 {
    color: ${(p) => p.$selected && colors.white};
  }
`;

export { Container, GameContainer, Nav, NavItem, Label };
