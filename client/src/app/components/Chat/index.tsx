import * as Styled from "./styles";
import * as Type from "../../../shared/Components/Types";
import Avatar from "../../../shared/Components/Avatar";
import { ReactComponent as TakeawayLogo } from "../../../assets/images/logo.svg";
import { ReactComponent as UserLogo } from "../../../assets/images/user.svg";

import { colors } from "../../../styles";
import { useAppSelector } from "../../../store";
import socket from "../../../services/socketService";
import { useEffect } from "react";

const Chat = () => {
  const { userDetails, chatroom } = useAppSelector((state) => state.game);

  return (
    chatroom && (
      <Styled.Chat>
        {userDetails?.roomId && (
          <>
            <Styled.MessageContainer>
              <Styled.AvatarContainer>
                <Avatar size="40" color={colors.brandDark}>
                  <TakeawayLogo />
                </Avatar>
              </Styled.AvatarContainer>

              <Styled.MessageContent>
                <Styled.RoundChat>
                  <Type.Heading4>1</Type.Heading4>
                </Styled.RoundChat>

                <Styled.CalculatedExpression>
                  <Type.SmallColdDark>
                    [ ( -1 + 19 ) / 3 ] = 6
                  </Type.SmallColdDark>
                </Styled.CalculatedExpression>

                <Styled.CalculatedExpression>
                  <Type.SmallColdDark>6</Type.SmallColdDark>
                </Styled.CalculatedExpression>
              </Styled.MessageContent>
            </Styled.MessageContainer>

            <Styled.MessageContainer isUser="true">
              <Styled.AvatarContainer>
                <Avatar size="40" color={colors.coldRegular}>
                  <UserLogo />
                </Avatar>
              </Styled.AvatarContainer>
              <Styled.MessageContent isUser="true">
                <Styled.RoundChat isUser="true">
                  <Type.Heading4>1</Type.Heading4>
                </Styled.RoundChat>
                <Styled.CalculatedExpression>
                  <Type.SmallColdDark>
                    [ ( -1 + 19 ) / 3 ] = 6
                  </Type.SmallColdDark>
                </Styled.CalculatedExpression>
                <Styled.CalculatedExpression>
                  <Type.SmallColdDark>6</Type.SmallColdDark>
                </Styled.CalculatedExpression>
              </Styled.MessageContent>
            </Styled.MessageContainer>

            <Styled.Options>
              <Styled.Choice>
                <Type.Heading5>-1</Type.Heading5>
              </Styled.Choice>
              <Styled.Choice>
                <Type.Heading5>0</Type.Heading5>
              </Styled.Choice>
              <Styled.Choice>
                <Type.Heading5>1</Type.Heading5>
              </Styled.Choice>
            </Styled.Options>
          </>
        )}
      </Styled.Chat>
    )
  );
};

export default Chat;
