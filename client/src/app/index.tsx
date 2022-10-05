import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyles from "../styles/global";
import * as Styled from "./styles";

import "./styles.tsx";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import socket from "../services/socketService";

const App = (): JSX.Element => {
  const [isConnected, setConnection] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      setConnection(true);
    });
    socket.on("disconnect", () => {
      setConnection(false);
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <Styled.AppContainer>
      <GlobalStyles />
      <Header />
      {isConnected ? <Home /> : <h1>Socket connection went wrong</h1>}

      <Footer />
    </Styled.AppContainer>
  );
};

export default App;
