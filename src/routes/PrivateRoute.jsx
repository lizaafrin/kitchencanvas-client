import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);

  if (loading) {
    return (
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }
  if (user) {
    return children;
  }
  // return <Navigate to="/login" state={{ from: '/' }} replace></Navigate>;
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
