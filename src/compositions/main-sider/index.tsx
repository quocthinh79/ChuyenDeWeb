import { AppstoreOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Flex, Sider } from "../../components";
import Button from "../../components/button";
import Menu, { MenuProps } from "../../components/menu";
import { EModeMenu, EWrapFlex } from "../../core";

export function MainSider() {
  const StyledContainer = styled("div")`
    .ant-layout-sider {
      .ant-menu-item {
        cursor: default;
      }
      .ant-menu-item:hover,
      .ant-menu-item:active,
      .ant-menu-item-selected {
        background-color: #fafafa !important;
      }
      .ant-menu-submenu-selected > .ant-menu-submenu-title {
        color: #000;
      }
    }
  `;

  // TODO: Refactor, not complete
  const item: MenuProps["items"] = [
    {
      key: "0",
      icon: <AppstoreOutlined />,
      label: "Nhu cầu",
      children: [
        {
          key: "sub 0",
          label: (
            <Flex wrap={EWrapFlex.Wrap} gap={10}>
              <Button>Văn phòng, học tập</Button>
              <Button>2D Design</Button>
              <Button>Quay dựng Video</Button>
              <Button>3D Design</Button>
              <Button>Gaming</Button>
              <Button>Lập trình</Button>
            </Flex>
          ),
        },
      ],
    },
    {
      key: "1",
      icon: <AppstoreOutlined />,
      label: "Thương hiệu",
      children: [
        {
          key: "sub 1",
          label: (
            <Flex wrap={EWrapFlex.Wrap} gap={10}>
              <Button>Apple</Button>
              <Button>Dell</Button>
              <Button>HP</Button>
              <Button>Lenovo</Button>
              <Button>Razer</Button>
              <Button>Microsoft</Button>
              <Button>MSI</Button>
              <Button>Asus</Button>
              <Button>Acer</Button>
              <Button>LG</Button>
              <Button>AVITA</Button>
              <Button>GIGABYTE</Button>
              <Button>Samsung</Button>
              <Button>HUAWEI</Button>
              <Button>Colorful</Button>
              <Button>Xiaomi</Button>
            </Flex>
          ),
        },
      ],
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Nguồn hàng",
      children: [
        {
          key: "sub 2",
          label: (
            <Flex wrap={EWrapFlex.Wrap} gap={10}>
              <Button>Chính hãng</Button>
              <Button>Nhập khẩu</Button>
            </Flex>
          ),
        },
      ],
    },
    {
      key: "3",
      icon: <AppstoreOutlined />,
      label: "CPU",
      children: [
        {
          key: "sub 3",
          label: (
            <Flex wrap={EWrapFlex.Wrap} gap={10}>
              <Button>Core i3</Button>
              <Button>Core i5</Button>
              <Button>Core i7</Button>
              <Button>Core i9</Button>
              <Button>Xeon</Button>
              <Button>Ryzen 3</Button>
              <Button>Ryzen 5</Button>
              <Button>Ryzen 7</Button>
              <Button>Ryzen 9</Button>
              <Button>MediaTek</Button>
              <Button>AMD</Button>
              <Button>Celeron</Button>
              <Button>Pentium</Button>
              <Button>Android</Button>
              <Button>M1</Button>
              <Button>M2</Button>
            </Flex>
          ),
        },
      ],
    },
  ];

  return (
    <StyledContainer>
      <Sider width={300}>
        <Menu
          mode={EModeMenu.Inline}
          // defaultSelectedKeys={["1"]}
          // defaultOpenKeys={["sub1"]}
          items={item}
        />
      </Sider>
    </StyledContainer>
  );
}

export default MainSider;
