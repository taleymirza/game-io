import { ChangeEvent, useState } from "react";
import socket from "../../../services/socketService";
import * as Type from "../../../shared/Components/Types";
import { useAuth } from "../Routes";
import * as Styled from "./styles";

const Login = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const auth = useAuth();

  const setUserName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setError("");
    setName(event.target.value);
  };

  const emitLogin = () => {
    if (name.length > 3) {
      socket.emit("login", { username: name });
      socket.once("message", ({ user, socketId }) => {
        auth?.onLogin({ user, id: socketId });
      });

      socket.on("error", (message) =>
        setError(`You can't login due to ${message}`)
      );
    } else {
      setError(`Characters should be atleast 4`);
    }
  };

  return (
    <Styled.CenterAligned>
      <Styled.Container>
        <Styled.Label htmlFor="username">
          <Type.BodyBold>Enter your name</Type.BodyBold>
        </Styled.Label>
        <Styled.Input id="username" value={name} onChange={setUserName} />
        <Styled.Button onClick={emitLogin}>Login</Styled.Button>
        <Type.SmallColdDark>{error}</Type.SmallColdDark>
      </Styled.Container>
    </Styled.CenterAligned>
  );
};

export default Login;
