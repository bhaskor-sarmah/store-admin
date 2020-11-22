import React, { useContext, useEffect, useState } from "react";
import { auth } from "../storage/firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  // This will halt children rendering untill firebase is loading currentUser
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    // returns a promise
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    // returns a promise
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    // returns a promise
    return auth.signOut();
  };



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
