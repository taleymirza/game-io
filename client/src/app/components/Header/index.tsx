import * as Styled from "./styles";
type HeaderProps = {
  room: string;
};

const Header = ({ room }: HeaderProps): JSX.Element => {
  return (
    <Styled.Header>
      <div>Logo</div>
      <div>Company name and {room}</div>
    </Styled.Header>
  );
};

export default Header;
