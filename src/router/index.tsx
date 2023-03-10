import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "../pages/about-us/about-us";
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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "products",
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
