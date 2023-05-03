import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [chefInfo, setchefInfo] = useState([]);
  const [recipeData, setRecipeData] = useState([]);

  const [loading, setLoading] = useState(true);

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

  const authInfo = {
    chefInfo,
    loading,
    recipeData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    // <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
