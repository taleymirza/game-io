import { createSlice } from "@reduxjs/toolkit";

export interface Room {
  name: string;
  id: string;
  type: string;
}

export type User = {
  user: string;
  id: string;
  roomId?: string;
};
interface GameState {
  userDetails: User | null;
  chatroom: Room | null;
  token: string | null;
  rooms: Room[] | null;
}

const initialState = {
  userDetails: null,
  chatroom: null,
  token: null,
  rooms: null,
} as GameState;
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    login(state, action) {
      state.userDetails = action.payload;
      state.token = action.payload.id;
    },
    logout(state) {
      state.token = null;
      state.userDetails = null;
    },
    setRooms(state, action) {
      state.rooms = action.payload;
    },
    enterRoom(state, action) {
      state.userDetails = state.userDetails && {
        ...state.userDetails,
        roomId: action.payload.id,
      };
      state.chatroom = action.payload;
    },
  },
});

export const { login, logout, enterRoom, setRooms } = gameSlice.actions;
export default gameSlice.reducer;
