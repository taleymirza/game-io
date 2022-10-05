const REACT_APP_SERVER_URL = "http://localhost:3004";

const getRooms = () =>
  fetch(`${REACT_APP_SERVER_URL}/rooms`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log("Something goes wrong due to ", e));

const getUsers = () =>
  fetch(`${REACT_APP_SERVER_URL}/users`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log("Something goes wrong due to ", e));

export { getRooms, getUsers };
