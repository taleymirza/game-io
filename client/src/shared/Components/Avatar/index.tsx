import * as Styled from "./styles";

export type AvatarProps = {
  size: string;
  color: string;
  children: React.ReactNode;
};

const Avatar = ({ size, color, children }: AvatarProps): JSX.Element => {
  return (
    <Styled.Avatar size={size} color={color}>
      {children}
    </Styled.Avatar>
  );
};

export default Avatar;
