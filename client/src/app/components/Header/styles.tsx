import styled from "styled-components";
import { colors } from "../../../styles";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 70px;
  align-items: center;
  background-color: ${colors.brandRegular};
`;

export { Header };
