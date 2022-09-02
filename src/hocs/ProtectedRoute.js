import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.access;
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="client-login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
