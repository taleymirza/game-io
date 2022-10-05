import styled from "styled-components";
import { colors } from "../../../styles";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 70px;
  align-items: center;
  background-color: ${colors.brandRegular};
  padding: 16px;
  box-shadow: 0px 3px 3px ${colors.boxShadowVariant1},
    0px 3px 4px ${colors.boxShadowVariant2},
    0px 1px 8px ${colors.boxShadowVariant1};
`;

const HeadingsContainer = styled.div`
  flex-direction: column;
  padding-left: 12px;
`;

export { Header, HeadingsContainer };
