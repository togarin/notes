import React, { useEffect } from "react";
import firebase from "firebase/app";
import AuthStore from "../store/auth";

export const AuthContext = React.createContext<firebase.User | undefined>(undefined);

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
