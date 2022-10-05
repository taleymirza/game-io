import styled from "styled-components";
import { colors } from "../styles";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  min-height: 100vh;
`;

export { AppContainer };
