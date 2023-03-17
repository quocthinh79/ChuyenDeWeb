import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { cx } from "@emotion/css";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flex, Header } from "../../components";
import ContainerFixed from "../../components/container-fixed";
import InputSearch from "../../components/input/input-search";
import Menu from "../../components/menu";
import {
  EBreakpoint,
  EFlexAlign,
  EInputTextSize,
  EJustifyFlex,
  EModeMenu,
  routerPathFull,
  templateStringToClassName,
} from "../../core";
import useLogged from "../../hooks/use-logged/useLogged";

export function MainHeader() {
  const logged = useLogged({});
  const location = useLocation();

  return (
    <Header position="sticky">
      <ContainerFixed breakpoint={EBreakpoint.XL} position="center">
        <Flex
          align={EFlexAlign.Center}
          justify={EJustifyFlex.SpaceBetween}
          className={cx(templateStringToClassName()`background: #fff`)}
        >
          <Menu
            selectedKeys={[location.pathname]}
            mode={EModeMenu.Horizontal}
            defaultSelectedKeys={[routerPathFull.home.root + "/"]}
            items={[
              {
                key: routerPathFull.home.root + "/",
                label: <Link to={routerPathFull.home.root}>Trang chủ</Link>,
              },
              {
                key: routerPathFull.products.root,
                label: <Link to={routerPathFull.products.root}>Sản phẩm</Link>,
              },
              {
                key: routerPathFull.aboutUs.root,
                label: (
                  <Link to={routerPathFull.aboutUs.root}>Về chúng tôi</Link>
                ),
              },
            ]}
          />
          <InputSearch
            placeholder="Nhập từ bạn cần tìm kiếm ..."
            enterButton="Search"
            size={EInputTextSize.Large}
          />
          <Menu
            selectedKeys={[location.pathname]}
            mode={EModeMenu.Horizontal}
            items={[
              {
                key: routerPathFull.cart.root,
                label: (
                  <Link to={routerPathFull.cart.root}>
                    <ShoppingCartOutlined style={{ fontSize: "28px" }} />
                  </Link>
                ),
              },
              {
                key: routerPathFull.account.root,
                label: (
                  <Link to={routerPathFull.account.root}>
                    <UserOutlined style={{ fontSize: "28px" }} />
                  </Link>
                ),
              },
              logged,
            ]}
          />
        </Flex>
      </ContainerFixed>
    </Header>
  );
}

export default memo(MainHeader);
