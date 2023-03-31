import styled from "@emotion/styled";
import { Divider } from "antd";
import { ReactNode, memo } from "react";
import { Content, Footer, Image, Layout, Text } from "../../components";
import Carousel from "../../components/carousel";
import ContainerFixed from "../../components/container-fixed";
import { Link as AntLink } from "../../components/typography/link";
import { GITHUB_LINK, SPACE_BETWEEN_ITEMS } from "../../const";
import {
  EBreakpoint,
  ETargetAnchor,
  ETextAlign,
  templateStringToClassName,
} from "../../core";
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
    <Layout className={templateStringToClassName()`min-height: 100vh;`}>
      <MainHeader />
      <ContainerFixed breakpoint={EBreakpoint.XL}>
        {carousel && (
          <Carousel lazyLoad="progressive" autoplay draggable>
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
        <Layout
          className={templateStringToClassName()`margin: ${
            !carousel && SPACE_BETWEEN_ITEMS
          }px 0; gap: ${SPACE_BETWEEN_ITEMS}px`}
        >
          {sider && <MainSider />}
          <Content>{children}</Content>
        </Layout>
      </ContainerFixed>
      <Footer style={{ marginTop: "auto" }}>
        <Divider />
        <ContainerFixed breakpoint={EBreakpoint.XL} position="center">
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

export default memo(MainLayout);
