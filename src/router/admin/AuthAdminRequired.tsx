import { Navigate, useLocation } from "react-router-dom";
import AdminPage from "../../pages/admin";
import { useStorageRoles } from "@store";

function AuthAdminRequired() {
  const { isAdmin } = useStorageRoles();
  const location = useLocation();

  if (!isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <AdminPage />;
}

export default AuthAdminRequired;
