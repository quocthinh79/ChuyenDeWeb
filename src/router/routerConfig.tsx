import { Result } from "../components";
import MainLayout from "../compositions/main-layout";
import { EResultStatus } from "../core";
import RouterLayout from "./routerLayout";
// import RouterLayout from "./routerLayout";

export const routerConfig: object = {
  path: "/",
  element: <RouterLayout />,
  errorElement: (
    <Result
      status={EResultStatus.NotFound}
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  ),
};

export default routerConfig;
