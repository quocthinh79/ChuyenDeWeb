import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerPathFull } from "../core";
import { routerAdminConfig } from "./admin/routerAdminConfig";
import routerAuthConfig from "./auth/routerAuthConfig";
import RouterHomeLayout from "./routerHomeLayout";
import RouterLayout from "./routerLayout";
import RouterProductLayout from "./routerProductLayout";

const HomePage = lazy(() => import("../pages/home"));
const AboutUs = lazy(() => import("../pages/about-us/about-us"));
const Account = lazy(() => import("../pages/account"));
const Cart = lazy(() => import("../pages/cart"));
const DetailPage = lazy(() => import("../pages/detail"));
const ProductPage = lazy(() => import("../pages/product"));

const router = [
  {
    element: (
      <Suspense fallback={<>Loading</>}>
        <RouterHomeLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<>Loading</>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<>Loading</>}>
        <RouterLayout />
      </Suspense>
    ),
    children: [
      {
        path: routerPathFull.aboutUs.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.cart.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.account.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <Account />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.detail.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <DetailPage />
          </Suspense>
        ),
      },
      routerAdminConfig,
    ],
  },
  {
    element: (
      <Suspense fallback={<>Loading</>}>
        <RouterProductLayout />
      </Suspense>
    ),
    children: [
      {
        path: routerPathFull.products.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <ProductPage />
          </Suspense>
        ),
      },
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
