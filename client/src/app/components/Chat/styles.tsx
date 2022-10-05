import styled from "styled-components";
import { colors } from "../../../styles";

const Chat = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

const MessageContainer = styled.div<{ isUser?: string }>`
  display: flex;
  flex-direction: ${(p) => (p.isUser ? "row-reverse" : "row")};
  margin: 16px 0;
`;

const AvatarContainer = styled.div`
  width: 72px;
  display: flex;
  justify-content: center;
`;

const MessageContent = styled.div<{ isUser?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.isUser ? "flex-end" : "flex-start")};
`;

const RoundChat = styled.div<{ isUser?: string }>`
  width: 56px;
  height: 56px;
  background-color: ${(p) =>
    p.isUser ? colors.transactionRegular : colors.coldRegular};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 4px 0;
  color: white;
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Choice = styled(RoundChat)<{ isUser?: string }>`
  color: ${(p) => (p.isUser ? colors.transactionRegular : colors.white)};
  background-color: ${(p) =>
    p.isUser ? colors.white : colors.transactionRegular};
  box-shadow: 0px 3px 3px ${colors.boxShadowVariant1},
    0px 3px 4px ${colors.boxShadowVariant2},
    0px 1px 8px ${colors.boxShadowVariant1};
  margin: 0 16px;
`;

const CalculatedExpression = styled.div`
  width: 198px;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 0 16px;
  margin: 4px 0;
  background-color: ${colors.warmVeryLight};
`;

export {
  Chat,
  MessageContainer,
  AvatarContainer,
  MessageContent,
  RoundChat,
  Options,
  Choice,
  CalculatedExpression,
};
