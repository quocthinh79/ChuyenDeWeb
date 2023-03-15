import { Outlet } from "react-router-dom";
import MainLayout from "../compositions/main-layout";

export function RouterProductLayout() {
  return (
    <MainLayout sider>
      <Outlet />
    </MainLayout>
  );
}

export default RouterProductLayout;
