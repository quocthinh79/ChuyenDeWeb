import {
  LaptopOutlined,
  LoginOutlined,
  LogoutOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { cx } from "@emotion/css";
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Content,
  Flex,
  Footer,
  Header,
  Layout,
  Sider,
  Text,
} from "../../components";
import ContainerFixed from "../../components/container-fixed";
import InputSearch from "../../components/input/input-search";
import Menu, { MenuProps } from "../../components/menu";
import { Link as AntLink } from "../../components/typography/link";
import { GITHUB_LINK } from "../../const";
import {
  EBreakpoint,
  EFlexAlign,
  EInputTextSize,
  EJustifyFlex,
  EModeMenu,
  ETargetAnchor,
  ETextAlign,
  routerPathFull,
  templateStringToClassName,
} from "../../core";
import MainHeader from "../main-header";

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
    const key: any = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey: any = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  return (
    <Layout>
      <MainHeader />
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
