import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const user = useSelector((store) => store.user.value);

  //   if logged
  if (user) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}

export default ProtectedRoute;
