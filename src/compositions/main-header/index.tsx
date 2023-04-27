import {
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  ContainerFixed,
  Flex,
  Form,
  FormItem,
  Header,
  Image,
  InputSearch,
  // Menu,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EBreakpoint,
  EButtonTypes,
  EFlexAlign,
  EInputTextSize,
  EJustifyFlex,
  EModeMenu,
  routerPathFull,
  templateStringToClassName,
} from "@core";
import { cx } from "@emotion/css";
import { useLogged } from "@hooks";
import { useStorageRoles, useStorageToken } from "@store";
import { Badge, Menu } from "antd";
import { useForm } from "antd/es/form/Form";
import { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const logo = require("../../images/logo.png");

export function MainHeader() {
  const { token } = useStorageToken();
  const logged = useLogged({ token });
  const location = useLocation();
  const navigator = useNavigate();
  const { isAdmin } = useStorageRoles();

  const [form] = useForm();

  const onFinish = (values: any) => {
    return values.keyWord
      ? navigator(`${routerPathFull.search.root}?keyWord=${values.keyWord}`)
      : navigator("/");
  };

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
            <Form form={form} onFinish={onFinish} layout="vertical">
              <FormItem name="keyWord">
                <InputSearch
                  placeholder="Nhập từ bạn cần tìm kiếm ..."
                  enterButton="Search"
                  size={EInputTextSize.Middle}
                  onSearch={() => form.submit()}
                />
              </FormItem>
            </Form>
            <Button
              type={EButtonTypes.Default}
              onClick={() => navigator(routerPathFull.aboutUs.root)}
            >
              Về chúng tôi
            </Button>
            {isAdmin() && (
              <Button
                type={EButtonTypes.Default}
                onClick={() => navigator(routerPathFull.admin.root)}
              >
                ADMIN
              </Button>
            )}
          </Flex>
          <Menu
            defaultSelectedKeys={[routerPathFull.home.root + "/"]}
            selectedKeys={[location.pathname]}
            mode={EModeMenu.Horizontal}
            items={[
              {
                key: routerPathFull.cart.root,
                label: (
                  <Link to={routerPathFull.cart.root}>
                    <Badge count={5}>
                      <ShoppingCartOutlined style={{ fontSize: "28px" }} />
                    </Badge>
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
