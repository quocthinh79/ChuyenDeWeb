import { routerPathFull } from "../../core";
import AuthAdminRequired from "./AuthAdminRequired";

export const routerAdminConfig: object = {
  path: routerPathFull.admin.root,
  element: <AuthAdminRequired />,
};
