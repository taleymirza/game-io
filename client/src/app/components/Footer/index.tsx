import * as Styled from "./styles";
import * as Type from "../../../shared/Components/Types";
import { ReactComponent as TakeawayLogo } from "../../../assets/images/JET-Logo.svg";

const Footer = (): JSX.Element => {
  return (
    <Styled.Footer>
      <Styled.Logo>
        <TakeawayLogo />
      </Styled.Logo>
      <Styled.Copyright>
        <Type.Small>Cookie statement</Type.Small>
        <Styled.PaddedBox>
          <Type.SmallSemiTransparent>
            © 2021 Takeaway.com
          </Type.SmallSemiTransparent>
        </Styled.PaddedBox>
      </Styled.Copyright>
    </Styled.Footer>
  );
};

export default Footer;
