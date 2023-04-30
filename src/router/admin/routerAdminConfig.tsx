import LaptopAdminPage from "../../pages/admin/laptop";
import { routerPathFull } from "../../core";
import AuthAdminRequired from "./AuthAdminRequired";
import CartAdminPage from "../../pages/admin/cart";
import AccountAdminPage from "../../pages/admin/account";

export const routerAdminConfig: object = {
  path: routerPathFull.admin.root,
  element: <AuthAdminRequired />,
  children: [
    {
      path: routerPathFull.admin.laptop,
      element: <LaptopAdminPage />,
    },
    {
      path: routerPathFull.admin.cart,
      element: <CartAdminPage />,
    },
    {
      path: routerPathFull.admin.account,
      element: <AccountAdminPage />,
    },
  ],
};
