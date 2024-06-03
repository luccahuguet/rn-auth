import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function authContentProvider({ children }) {
  const [token, setToken] = useState(null);

  function authenticate(token) {
    setToken(token);
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
