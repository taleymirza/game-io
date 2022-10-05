import React from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { login, logout, User } from "../../../store/slices/gameSlice";
import { Game } from "../Home";
import Login from "../Login";

type Auth = {
  token: string | null;
  onLogin: (user: User) => void;
  onLogout: () => void;
};

const AuthContext = React.createContext<Auth | null>(null);

const AuthProvider = ({ children }: any) => {
  const token = useAppSelector((state) => state.game.token);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogin = (user: User) => {
    dispatch(login(user));
    navigate("/game");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const value: Auth = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const ProtectedRoute = ({ children }: any) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export const GameRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/game"
            element={
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
