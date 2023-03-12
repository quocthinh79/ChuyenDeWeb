import { ReactNode } from "react";
import { Content, Footer, Layout, Text } from "../../components";
import ContainerFixed from "../../components/container-fixed";
import { Link as AntLink } from "../../components/typography/link";
import { GITHUB_LINK } from "../../const";
import { EBreakpoint, ETargetAnchor, ETextAlign } from "../../core";
import MainHeader from "../main-header";
import MainSider from "../main-sider";

export interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout>
      <MainHeader />
      <ContainerFixed breakpoint={EBreakpoint.XXL} position="center">
        <Layout>
          <MainSider />
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
