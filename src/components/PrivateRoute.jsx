import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/Selectors";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
