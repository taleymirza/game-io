import styled from "styled-components";

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

export { Small, SmallSemiTransparent };
