
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/detail";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import { routerAdminConfig } from "./admin/routerAdminConfig";
import routerAuthConfig from "./auth/routerAuthConfig";
import routerConfig from "./routerConfig";
import RouterLayout from "./routerLayout";

const router = [
  {
    ...routerConfig,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product",
        element: <RouterLayout />,
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
          {
            path: "detail",
            element: <DetailPage />,
          },
        ],
      },
      routerAdminConfig,
      routerAuthConfig,
    ],
  },
];

export function Router() {
  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default Router;
