import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Content, Footer, Header, Layout, Text } from "../../components";
import ContainerFixed from "../../components/container-fixed";
import Menu from "../../components/menu";
import { Link as AntLink } from "../../components/typography/link";
import { GITHUB_LINK } from "../../const";
import { EBreakpoint, EModeMenu, ETargetAnchor, ETextAlign } from "../../core";
import itemNav from "../../core/navigation";
import ETheme from "../../core/types/ETheme";

export interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  return (
    <Layout>
      <Header
      // style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
      >
        <ContainerFixed breakpoint={EBreakpoint.XXL} position="center">
          <Menu
            selectedKeys={[location.pathname]}
            // theme={ETheme.Dark}
            mode={EModeMenu.Horizontal}
            defaultSelectedKeys={["/"]}
            items={itemNav.map((item, index) => ({
              key: item.path,
              label: <Link to={item.path}>{item.label}</Link>,
            }))}
          />
        </ContainerFixed>
      </Header>
      <ContainerFixed breakpoint={EBreakpoint.XXL} position="center">
        <Content>{children}</Content>
      </ContainerFixed>
      <Footer>
        <ContainerFixed breakpoint={EBreakpoint.XXL} position="center">
          <Text textAlign={ETextAlign.Center}>
            Electronic Commerce ©2023 Created by{" "}
            <AntLink target={ETargetAnchor.Blank} href={GITHUB_LINK}>
              Lê Quốc Thịnh
            </AntLink>
          </Text>
        </ContainerFixed>
      </Footer>
    </Layout>
  );
}

export default MainLayout;
