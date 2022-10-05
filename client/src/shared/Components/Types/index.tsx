import styled from "styled-components";
import { colors } from "../../../styles";

const Small = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  mix-blend-mode: normal;
`;

const SmallSemiTransparent = styled(Small)`
  opacity: 0.4;
`;

const SmallColdDark = styled(Small)`
  color: ${colors.coldDark};
`;

const Label = styled(Small)`
  font-size: 14px;
  line-height: 24px;
`;

const Heading5 = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
`;

const Heading4 = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;

const BodyBold = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.coldRegular};
`;

export {
  Small,
  SmallSemiTransparent,
  SmallColdDark,
  Label,
  Heading5,
  Heading4,
  BodyBold,
};
