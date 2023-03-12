import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerPathFull } from "../core";
import AboutUs from "../pages/about-us/about-us";
import Account from "../pages/account";
import Cart from "../pages/cart";
import DetailPage from "../pages/detail";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import { routerAdminConfig } from "./admin/routerAdminConfig";
import routerAuthConfig from "./auth/routerAuthConfig";
import routerConfig from "./routerConfig";

const router = [
  {
    ...routerConfig,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routerPathFull.aboutUs.root,
        element: <AboutUs />,
      },
      {
        path: routerPathFull.cart.root,
        element: <Cart />,
      },

      {
        path: routerPathFull.account.root,
        element: <Account />,
      },
      {
        path: routerPathFull.products.root,
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
          {
            path: routerPathFull.products.detail,
            element: <DetailPage />,
          },
        ],
      },
      routerAdminConfig,
    ],
  },
  {
    ...routerAuthConfig,
  },
];

export function Router() {
  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default Router;
