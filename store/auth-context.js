import { createContext, useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function authContentProvider({ children }) {
  const [token, setToken] = useState(null);

  function authenticate(token) {
    setToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setToken(null);
  }

  const value = {
    token,
    isAuthenticated: !!token,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default authContentProvider;
