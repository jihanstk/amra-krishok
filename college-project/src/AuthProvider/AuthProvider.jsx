"use client";
import { app } from "@/libs/firebase.config";
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(false | null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserName = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = (email, password) => {
    return signOut(auth);
  };
  const deleteAccount = (user) => {
    setLoading(true);
    return deleteUser(user);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const jwtData = {
        userName: currentUser?.displayName,
        userEmail: currentUser?.email,
      };
      if (currentUser) {
        axios
          .post("https://api-amra-krishok.vercel.app/jwt", jwtData)
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem("access-token", token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const infos = {
    login,
    signUp,
    logOut,
    updateUserName,
    googleLogin,
    deleteAccount,
    user,
    loading,
    setLoading,
  };
  return <AuthContext.Provider value={infos}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
