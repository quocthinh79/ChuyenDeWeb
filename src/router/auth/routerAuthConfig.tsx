
import ForgotPasswordPage from "../../pages/auth/forgot-password";
import LoginPage from "../../pages/auth/login";
import RegisterPage from "../../pages/auth/register";
import RouterAuthLayout from "./routerAuthLayout";

export const routerAuthConfig: object = {
  path: "auth",
  element: <RouterAuthLayout />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ],
};

export default routerAuthConfig;
