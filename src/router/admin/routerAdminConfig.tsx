import React from "react";
import AuthAdminRequired from "./AuthAdminRequired";

export const routerAdminConfig: object = {
  path: "admin",
  element: <AuthAdminRequired />,
};
