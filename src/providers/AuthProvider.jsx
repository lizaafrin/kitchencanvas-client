import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [chefInfo, setchefInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-lizaafrin.vercel.app/")
      .then((res) => res.json())
      .then((data) => setchefInfo(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  // console.log(chefInfo);

  const authInfo = {
    chefInfo,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    // <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
