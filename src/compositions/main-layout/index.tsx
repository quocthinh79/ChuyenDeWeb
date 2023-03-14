import { ReactNode } from "react";
import { Content, Footer, Layout, Text } from "../../components";
import Carousel from "../../components/carousel";
import ContainerFixed from "../../components/container-fixed";
import { Link as AntLink } from "../../components/typography/link";
import { GITHUB_LINK } from "../../const";
import { EBreakpoint, ETargetAnchor, ETextAlign } from "../../core";
import MainHeader from "../main-header";
import MainSider from "../main-sider";

export interface MainLayoutProps {
  children?: ReactNode;
  sider?: boolean;
  carousel?: boolean;
}

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export function MainLayout({ children, sider, carousel }: MainLayoutProps) {
  return (
    <Layout>
      <MainHeader />
      <ContainerFixed breakpoint={EBreakpoint.XXL} position="center">
        {carousel && (
          <Carousel autoplay draggable>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        )}
        <Layout>
          {sider && <MainSider />}
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
