import Avatar from "../../../shared/Components/Avatar";
import { colors } from "../../../styles";
import * as Styled from "./styles";
import { ReactComponent as TakeawayLogo } from "../../../assets/images/logo.svg";

type HeaderProps = {
  room: string;
};

const Header = ({ room }: HeaderProps): JSX.Element => {
  return (
    <Styled.Header>
      <Avatar size="40" color={colors.brandDark}>
        <TakeawayLogo />
      </Avatar>
      <div>Logo</div>
      <div>Company name and {room}</div>
    </Styled.Header>
  );
};

export default Header;
