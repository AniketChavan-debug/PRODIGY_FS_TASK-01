import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/dashboard" />;
  }

  return <Component />;
};

export default ProtectedRoute;
