import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Result } from "../components";
import { EResultStatus, routerPathFull } from "../core";
import AboutUs from "../pages/about-us/about-us";
import Account from "../pages/account";
import Cart from "../pages/cart";
import DetailPage from "../pages/detail";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import { routerAdminConfig } from "./admin/routerAdminConfig";
import routerAuthConfig from "./auth/routerAuthConfig";
import RouterHomeLayout from "./routerHomeLayout";
import RouterLayout from "./routerLayout";
import RouterProductLayout from "./routerProductLayout";

const router = [
  {
    element: <RouterHomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
    errorElement: (
      <Result
        status={EResultStatus.NotFound}
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    ),
  },
  {
    element: <RouterLayout />,
    children: [
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
        path: routerPathFull.detail.root,
        element: <DetailPage />,
      },
      routerAdminConfig,
    ],
    errorElement: (
      <Result
        status={EResultStatus.NotFound}
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    ),
  },
  {
    element: <RouterProductLayout />,
    children: [
      {
        path: routerPathFull.products.root,
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
        ],
      },
    ],
    errorElement: (
      <Result
        status={EResultStatus.NotFound}
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    ),
  },
  {
    ...routerAuthConfig,
  },
];

export function Router() {
  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default Router;
