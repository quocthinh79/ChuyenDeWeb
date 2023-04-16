export const routerPath = {
  auth: {
    root: "auth",
    login: "login",
    forgotPass: "forgot-password",
    register: "register",
    newPassword: "new-password",
    changePassword: "change-password",
    loginSuccess: "login-success",
    success: "success",
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
  search: {
    root: "search",
  },
  admin: {
    root: "admin",
  },
  detail: {
    root: "detail/:idProduct",
  },
  checkout: {
    root: "checkout",
  },
};

export type TRouterPath = typeof routerPath;

export default routerPath;
