export const routerPath = {
  auth: {
    root: "auth",
    login: "login",
    forgotPass: "forgot-password",
    register: "register",
    newPassword: "new-password",
    changePassword: "change-password",
    loginSuccess: "login-success",
    otp: "otp",
    requestNewPassword: "request-new-password",
  },
  home: {
    root: "",
  },
  aboutUs: {
    root: "about-us",
  },
  cart: {
    root: "cart",
  },
  account: {
    root: "account",
  },
  products: {
    root: "products",
    detail: "detail",
  },
  admin: {
    root: "admin",
  },
};

export type TRouterPath = typeof routerPath;

export default routerPath;
