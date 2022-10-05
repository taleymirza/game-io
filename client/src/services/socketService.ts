import { io } from "socket.io-client";

const REACT_APP_SOCKET_URL = "http://localhost:8082";
const socket = io(REACT_APP_SOCKET_URL);

export default socket;
