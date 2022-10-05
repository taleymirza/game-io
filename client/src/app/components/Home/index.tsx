import Chat from "../Chat";
import { Rooms } from "./Rooms";

import { GameRoutes } from "../Routes";
import * as Styled from "./styles";

export const Home = () => {
  return (
    <Styled.GameContainer>
      <GameRoutes />
    </Styled.GameContainer>
  );
};

export const Game = () => {
  return (
    <>
      <Rooms />
      <Chat />
    </>
  );
};

export default Home;
