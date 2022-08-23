import styled from "styled-components";
import { viewports, colors } from "../../../styles";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 72px;
  align-items: center;
  width: 100%;
  margin-top: auto;

  background-color: ${colors.coldDark};
  @media ${viewports.laptop} {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  height: 40px;
  min-width: 238px;
  padding: 0 20px 0;
  flex: 1;
`;

const PaddedBox = styled.span`
  padding: 0 20px 0 40px;
`;
const Copyright = styled.div`
  height: 40px;
  flex-direction: row;
  right: 0;
  align-items: center;
  display: inline-flex;
  padding-left: 20px;
`;

export { Footer, Logo, Copyright, PaddedBox };
