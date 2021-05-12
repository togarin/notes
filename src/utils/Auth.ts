import React, { useEffect } from "react";
import AuthStore from "../store/auth";

export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC = ({ children }) => {
  useEffect(() => {
    AuthStore.auth();
  }, []);

  if (AuthStore.loading) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={AuthStore.currentUser}>
      {children}
    </AuthContext.Provider>
  );
};
