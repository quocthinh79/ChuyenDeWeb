import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Content, Footer, Header, Layout } from "../../components";
import Menu from "../../components/menu";
import { EModeMenu } from "../../core";
import ETheme from "../../core/types/ETheme";

export interface MainLayoutProps {
  children?: ReactNode;
}

interface ItemsNavigation {
  label: string;
  path: string;
}

export function MainLayout({ children }: MainLayoutProps) {
  const itemNav: ItemsNavigation[] = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/products" },
    { label: "Về chúng tôi", path: "/about-us" },
    { label: "Giỏ hàng", path: "/cart" },
    { label: "Tài khoản", path: "/account" },
    { label: "Đăng nhập", path: "/auth/login" },
  ];

  return (
    <Layout>
      <Header
      // style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
      >
        {/* <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        /> */}
        <Menu
          theme={ETheme.Dark}
          mode={EModeMenu.Horizontal}
          defaultSelectedKeys={["1"]}
          items={itemNav.map((item, index) => ({
            key: String(index + 1),
            label: <Link to={item.path}>{item.label}</Link>,
          }))}
        />
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Electronic Commerce ©2023 Created by Lê Quốc Thịnh
      </Footer>
    </Layout>
  );
}

export default MainLayout;
