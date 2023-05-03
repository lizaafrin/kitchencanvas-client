import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [chefInfo, setchefInfo] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  // ===== Github signIn using firebase ======
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch(console.error());
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-lizaafrin.vercel.app/")
      .then((res) => res.json())
      .then((data) => setchefInfo(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  // console.log(chefInfo);
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-lizaafrin.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipeData(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log("Logged in user inside auth state Observer", loggedUser);
      setUser(loggedUser);
      console.log(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    chefInfo,
    recipeData,
    loading,
    createUser,
    setUser,
    signIn,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    // <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
