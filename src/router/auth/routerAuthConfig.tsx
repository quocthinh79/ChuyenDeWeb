import { routerPathFull } from "../../core";
import ForgotPasswordPage from "../../pages/auth/forgot-password";
import LoginPage from "../../pages/auth/login";
import RegisterPage from "../../pages/auth/register";
import RouterAuthLayout from "./routerAuthLayout";

export const routerAuthConfig: object = {
  path: routerPathFull.auth.root,
  element: <RouterAuthLayout />,
  children: [
    {
      path: routerPathFull.auth.login,
      element: <LoginPage />,
    },
    {
      path: routerPathFull.auth.forgotPass,
      element: <ForgotPasswordPage />,
    },
    {
      path: routerPathFull.auth.register,
      element: <RegisterPage />,
    },
  ],
};

export default routerAuthConfig;
