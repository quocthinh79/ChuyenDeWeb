import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AdminPage from "../../pages/admin";

function AuthAdminRequired() {
  const admin: boolean = true;
  const location = useLocation();
  if (!admin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <AdminPage />;
}

export default AuthAdminRequired;
