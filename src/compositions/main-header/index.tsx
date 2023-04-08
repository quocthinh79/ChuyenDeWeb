import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  ContainerFixed,
  Flex,
  Header,
  Image,
  InputSearch,
  Menu,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EBreakpoint,
  EButtonTypes,
  EDirectionFlex,
  EFlexAlign,
  EInputTextSize,
  EJustifyFlex,
  EModeMenu,
  routerPathFull,
  templateStringToClassName,
} from "@core";
import { cx } from "@emotion/css";
import { useLogged } from "@hooks";
import { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const logo = require("../../images/logo.png");

export function MainHeader() {
  const logged = useLogged({});
  const location = useLocation();
  const navigator = useNavigate();

  return (
    <Header position="sticky">
      <ContainerFixed
        className={templateStringToClassName()`height: 100%; display: flex;`}
        breakpoint={EBreakpoint.XL}
        position="center"
      >
        <Link to={routerPathFull.home.root}>
          <Image width="auto" height="100%" src={logo} preview={false} />
        </Link>
        <Flex
          align={EFlexAlign.Center}
          justify={EJustifyFlex.SpaceBetween}
          className={cx(templateStringToClassName()`background: #fff`)}
        >
          <Flex align={EFlexAlign.Center} gap={SPACE_BETWEEN_ITEMS}>
            <InputSearch
              placeholder="Nhập từ bạn cần tìm kiếm ..."
              enterButton="Search"
              size={EInputTextSize.Middle}
            />
            <Button
              type={EButtonTypes.Default}
              onClick={() => navigator(routerPathFull.aboutUs.root)}
            >
              Về chúng tôi
            </Button>
          </Flex>
          <Menu
            defaultSelectedKeys={[routerPathFull.home.root + "/"]}
            selectedKeys={[location.pathname]}
            mode={EModeMenu.Horizontal}
            items={[
              // {
              //   key: routerPathFull.aboutUs.root,
              //   label: (
              //     <Link to={routerPathFull.aboutUs.root}>Về chúng tôi</Link>
              //   ),
              // },
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
