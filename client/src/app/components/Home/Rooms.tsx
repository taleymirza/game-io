import { useEffect, useState } from "react";

import * as Type from "../../../shared/Components/Types";
import * as Styled from "./styles";

import { ReactComponent as ArrowRight } from "../../../assets/images/arrow-right.svg";
import { colors } from "../../../styles";

import { getRooms } from "../../../services/apiService";
import socket from "../../../services/socketService";

import { useAppDispatch, useAppSelector } from "../../../store";
import { enterRoom, Room, setRooms } from "../../../store/slices/gameSlice";
import { useAuth } from "../Routes";

export const Rooms = () => {
  const [selection, setSelection] = useState<Room | null>(null);
  const { userDetails, rooms, chatroom } = useAppSelector(
    (state) => state.game
  );

  const auth = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getRooms().then((data) => {
      dispatch(setRooms(data));
    });
  }, [dispatch]);

  const onLeaveRoom = () => {
    socket.emit("leaveRoom");
  };

  const onEnterRoom = (room: Room) => {
    if (chatroom) onLeaveRoom();
    socket.emit("joinRoom", {
      username: userDetails?.user || "",
      room: room?.name,
      roomType: room?.type,
    });
    socket.once("onReady", ({ state }: { state: boolean }) => {
      if (state) socket.emit("letsPlay");
    });
    socket.on("error", (message) => {
      console.log(message);
    });

    dispatch(enterRoom(room));
  };

  const onSelectRoom = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.stopPropagation();

    const selectedRoom = rooms?.filter((room) => room.id === id)[0];
    if (selectedRoom) {
      onEnterRoom(selectedRoom);
      setSelection(selectedRoom);
    }
  };

  socket.on("onReady", (message) => console.log("bn", message));

  return (
    <Styled.Container hideOnMobile={!!selection}>
      <Styled.Label>
        <Type.BodyBold>Choose you game room</Type.BodyBold>
      </Styled.Label>
      <Styled.Nav>
        {rooms?.map(({ id, name }) => (
          <Styled.NavItem
            key={id}
            onClick={(e) => onSelectRoom(e, id)}
            $selected={selection?.id === id}
          >
            <Type.BodyBold>{name}</Type.BodyBold>
            <ArrowRight fill={colors.transactionRegular} />
          </Styled.NavItem>
        ))}
        <Styled.NavItem onClick={() => auth?.onLogout()}>
          <Type.BodyBold>Logout</Type.BodyBold>
          <ArrowRight fill={colors.transactionRegular} />
        </Styled.NavItem>
      </Styled.Nav>
    </Styled.Container>
  );
};
