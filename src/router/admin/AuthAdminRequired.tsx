import { Navigate, useLocation } from "react-router-dom";
import AdminLaptopPage from "../../pages/admin";
import { useStorageRoles } from "@store";

function AuthAdminRequired() {
  const { isAdmin } = useStorageRoles();
  const location = useLocation();

  if (!isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <AdminLaptopPage />;
}

export default AuthAdminRequired;
