import styled from "styled-components";
import { AvatarProps } from "./";

const Avatar = styled.div<AvatarProps>`
  display: flex;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export { Avatar };
