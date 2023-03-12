import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Content, Footer, Header, Layout, Sider, Text } from "../../components";
import ContainerFixed from "../../components/container-fixed";
import Menu, { MenuProps } from "../../components/menu";
import { Link as AntLink } from "../../components/typography/link";
import { GITHUB_LINK } from "../../const";
import { EBreakpoint, EModeMenu, ETargetAnchor, ETextAlign } from "../../core";
import itemNav from "../../core/navigation";
import ETheme from "../../core/types/ETheme";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

export interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  return (
    <Layout>
      <Header position="fixed">
        <ContainerFixed breakpoint={EBreakpoint.XXL} position="center">
          <Menu
            selectedKeys={[location.pathname]}
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
        <Layout>
          <Sider>
            <Menu
              mode={EModeMenu.Inline}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              items={items2}
            />
          </Sider>
          <Content>{children}</Content>
        </Layout>
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
