import { useStorageRoles } from "@store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function AuthAdminRequired() {
  const { isAdmin } = useStorageRoles();
  const location = useLocation();

  if (!isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default AuthAdminRequired;
