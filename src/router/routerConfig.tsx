import { Result } from "../components";
import { EResultStatus } from "../core";
import RouterLayout from "./routerLayout";

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
