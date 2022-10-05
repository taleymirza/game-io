import Avatar from "../../../shared/Components/Avatar";
import { colors } from "../../../styles";
import * as Styled from "./styles";
import { ReactComponent as TakeawayLogo } from "../../../assets/images/logo.svg";
import * as Type from "../../../shared/Components/Types";
import { useAppSelector } from "../../../store";

const Header = (): JSX.Element => {
  const { userDetails, rooms } = useAppSelector((state) => state.game);
  const currentRoom = rooms?.filter(
    (room) => room.id === userDetails?.roomId
  )[0];

  return (
    <Styled.Header>
      <Avatar size="40" color={colors.brandDark}>
        <TakeawayLogo />
      </Avatar>

      <Styled.HeadingsContainer>
        <Type.Heading5>
          {currentRoom
            ? `Playing with ${currentRoom.name}`
            : "Welcome to the game!"}
        </Type.Heading5>
        <Type.Label>Win the game or win the job</Type.Label>
      </Styled.HeadingsContainer>
    </Styled.Header>
  );
};

export default Header;
