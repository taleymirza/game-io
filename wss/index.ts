import express from "express";
import * as http from "http";
import { Server } from "socket.io";

import APIService from "./api.service";

const port = 8082;
const server = http.createServer(express);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});
const apiService = new APIService();

enum GameState {
  WAIT = "wait",
  PLAY = "play",
}

io.on("connection", (socket) => {
  socket.on("login", ({ username }) => {
    apiService
      .createUser(socket.id, username)
      .then(() => {
        socket.emit("message", {
          user: username,
          message: `Welcome ${username}`,
          socketId: socket.id,
        });
      })
      .catch((err) => {
        socket.emit("error", { message: err });
      });
  });

  /* Join to the room */
  socket.on("joinRoom", ({ username, room, roomType }) => {
    apiService
      .assignRoom(room, socket.id, roomType)
      .then(() => {
        socket.emit("message", {
          user: username,
          message: `welcome to room ${room}`,
          room: room,
        });
        if (roomType !== "cpu") {
          socket.to(room).emit("message", {
            user: username,
            message: `has joined ${room}`,
            room: room,
          });
        }

        /* Check the room with how many socket is connected */
        const maxRoomSize = roomType === "cpu" ? 1 : 2;
        socket.join(room);
        if (
          io.of("/").adapter.rooms.has(room) &&
          io.of("/").adapter.rooms.get(room)?.size === maxRoomSize
        ) {
          io.to(room).emit("onReady", { state: true });
        }
      })
      .catch((err) => {
        socket.emit("error", { message: err });
      });
  });

  /* Start the game and send the first random number with turn control */
  socket.on("letsPlay", () => {
    apiService
      .getUserDetail(socket.id)
      .then((result) => {
        io.to(result?.data.room).emit("randomNumber", {
          number: `${apiService.createRandomNumber(1999, 9999)}`,
          isFirst: true,
        });

        socket.broadcast.emit("activateYourTurn", {
          user: io.of("/").adapter.rooms.has(result?.data.room)
            ? io.of("/").adapter.rooms.get(result?.data.room)?.keys[0]
            : null,
          state: GameState.PLAY,
        });
      })
      .catch((err) => {
        console.log(err);
        socket.emit("error", { message: err });
      });
  });

  /* Send Calculated number back with Divisible control */
  socket.on("sendNumber", ({ number, selectedNumber }) => {
    apiService.getUserDetail(socket.id).then((result) => {
      const numbers = [selectedNumber, number];
      const sumValues = (num: number[]) => {
        return num.reduce((a: number, b: number) => {
          return a + b;
        });
      };

      const calculationResult = (number: number[], numberB: number): number => {
        const res = sumValues(number);
        if (res % 3 == 0) {
          return res / 3;
        } else {
          return numberB;
        }
      };

      const lastResult = calculationResult(numbers, number);

      // When the second oponnent is a CPU
      if (result?.data?.roomType === "cpu") {
        // After clients selection it will wait 2 seconds for the CPU selection

        setTimeout(() => {
          const setOfRandomNumbers = [1, 0, -1];
          const randomCPU =
            setOfRandomNumbers[
              Math.floor(Math.random() * setOfRandomNumbers.length)
            ];
          const combinedNumbers = [randomCPU, lastResult];
          const CPUResult = calculationResult(combinedNumbers, lastResult);
          io.to(result?.data.room).emit("randomNumber", {
            number: calculationResult(combinedNumbers, lastResult),
            isFirst: false,
            user: "CPU",
            selectedNumber: randomCPU,
            isCorrectResult: CPUResult == lastResult ? false : true,
          });

          io.to(result?.data.room).emit("activateYourTurn", {
            user: socket.id,
            state: GameState.PLAY,
          });

          if (calculationResult(combinedNumbers, lastResult) === 1) {
            io.to(result?.data.room).emit("gameOver", {
              user: "CPU",
              isOver: true,
            });
          }
        }, 2000);
      }
      io.to(result?.data.room).emit("randomNumber", {
        number: calculationResult(numbers, number),
        isFirst: false,
        user: result?.data.name,
        selectedNumber: selectedNumber,
        isCorrectResult:
          calculationResult(numbers, number) == number ? false : true,
      });

      io.to(result?.data.room).emit("activateYourTurn", {
        user: socket.id,
        state: GameState.WAIT,
      });

      /* if 1 is reached than emit the GameOver Listener */
      if (calculationResult(numbers, number) == 1) {
        io.to(result?.data.room).emit("gameOver", {
          user: result?.data.name,
          isOver: true,
        });
      }
    });
  });

  /* Clear all data and states when the user leave the room */
  socket.on("leaveRoom", () => {
    apiService.getUserDetail(socket.id).then((result) => {
      io.to(result?.data.room).emit("onReady", { state: false });
      apiService.removeUserFromRoom(socket.id).then(() => {
        socket.leave(result?.data.room);
      });
    });
  });

  /* OnDisconnet clear all login and room data from the connected socket */
  socket.on("disconnect", (s) => {
    apiService.getUserDetail(socket.id).then((result) => {
      socket.broadcast.to(result?.data.room).emit("onReady", { state: false });
      apiService.removeUserFromRoom(socket.id).then(() => {
        socket.leave(result?.data.room);
      });
    });

    // Clear selected user from FakeDb and broadcast the event to the subscribers
    apiService.clearUser(socket.id).then(() => {
      socket.broadcast.emit("listTrigger", `${true}`);
    });
  });
});

server.listen(port, () => {
  console.log(
    `Socket Connection Established on ${process.env.HOST_LOCAL} in port ${process.env.SOCKET_PORT}`
  );
});
