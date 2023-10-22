import React, { ReactNode, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getUserByToken, signIn } from "../util/authRequests";

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User;
  token: string;
  loginWithCredentials: (data: LoginData) => void;
  loginWithToken: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthContextProviderProps {
  children: ReactNode;
}

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    password: "",
    name: "",
    role: "",
    avatar: "",
  });
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  async function loginWithCredentials(loginData: LoginData) {
    try {
      const receivedToken = await signIn(loginData);
      if (receivedToken) {
        setToken(receivedToken);
        await AsyncStorage.setItem("token", receivedToken);
        const user: User = await getUserByToken(receivedToken);
        setUser(user);
      }
    } catch (e) {
      throw new Error("Invalid email or password");
    }
  }

  async function loginWithToken(token: string) {
    setToken(token);
    await AsyncStorage.setItem("token", token);
    const user: User = await getUserByToken(token);
    setUser(user);
  }

  async function logout() {
    await AsyncStorage.removeItem("token");
    setUser({ id: 0, email: "", password: "", name: "", role: "", avatar: "" });
    setToken("");
  }

  const contextValue: AuthContextType = {
    user: user,
    token: token,
    loginWithCredentials: loginWithCredentials,
    loginWithToken: loginWithToken,
    logout: logout,
    isAuthenticated: isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
