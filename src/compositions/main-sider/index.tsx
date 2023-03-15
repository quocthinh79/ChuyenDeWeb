import { AppstoreOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { CheckableTag, Flex, Sider } from "../../components";
import Button from "../../components/button";
import Menu, { MenuProps } from "../../components/menu";
import { EModeMenu, EWrapFlex } from "../../core";
import { useState } from "react";

const tagsData = ["Movies", "Books", "Music", "Sports"];
export function MainSider() {
  const StyledContainer = styled("div")`
    .ant-layout-sider {
      background-color: inherit;
    }
  `;

  // // TODO: Refactor, not complete
  // const item: MenuProps["items"] = [
  //   {
  //     key: "0",
  //     icon: <AppstoreOutlined />,
  //     label: "Nhu cầu",
  //     children: [
  //       {
  //         key: "sub 0",
  //         label: (
  //           <Flex wrap={EWrapFlex.Wrap} gap={10}>
  //             <Button>Văn phòng, học tập</Button>
  //             <Button>2D Design</Button>
  //             <Button>Quay dựng Video</Button>
  //             <Button>3D Design</Button>
  //             <Button>Gaming</Button>
  //             <Button>Lập trình</Button>
  //           </Flex>
  //         ),
  //       },
  //     ],
  //   },
  //   {
  //     key: "1",
  //     icon: <AppstoreOutlined />,
  //     label: "Thương hiệu",
  //     children: [
  //       {
  //         key: "sub 1",
  //         label: (
  //           <Flex wrap={EWrapFlex.Wrap} gap={10}>
  //             <Button>Apple</Button>
  //             <Button>Dell</Button>
  //             <Button>HP</Button>
  //             <Button>Lenovo</Button>
  //             <Button>Razer</Button>
  //             <Button>Microsoft</Button>
  //             <Button>MSI</Button>
  //             <Button>Asus</Button>
  //             <Button>Acer</Button>
  //             <Button>LG</Button>
  //             <Button>AVITA</Button>
  //             <Button>GIGABYTE</Button>
  //             <Button>Samsung</Button>
  //             <Button>HUAWEI</Button>
  //             <Button>Colorful</Button>
  //             <Button>Xiaomi</Button>
  //           </Flex>
  //         ),
  //       },
  //     ],
  //   },
  //   {
  //     key: "2",
  //     icon: <AppstoreOutlined />,
  //     label: "Nguồn hàng",
  //     children: [
  //       {
  //         key: "sub 2",
  //         label: (
  //           <Flex wrap={EWrapFlex.Wrap} gap={10}>
  //             <Button>Chính hãng</Button>
  //             <Button>Nhập khẩu</Button>
  //           </Flex>
  //         ),
  //       },
  //     ],
  //   },
  //   {
  //     key: "3",
  //     icon: <AppstoreOutlined />,
  //     label: "CPU",
  //     children: [
  //       {
  //         key: "sub 3",
  //         label: (
  //           <Flex wrap={EWrapFlex.Wrap} gap={10}>
  //             <Button>Core i3</Button>
  //             <Button>Core i5</Button>
  //             <Button>Core i7</Button>
  //             <Button>Core i9</Button>
  //             <Button>Xeon</Button>
  //             <Button>Ryzen 3</Button>
  //             <Button>Ryzen 5</Button>
  //             <Button>Ryzen 7</Button>
  //             <Button>Ryzen 9</Button>
  //             <Button>MediaTek</Button>
  //             <Button>AMD</Button>
  //             <Button>Celeron</Button>
  //             <Button>Pentium</Button>
  //             <Button>Android</Button>
  //             <Button>M1</Button>
  //             <Button>M2</Button>
  //           </Flex>
  //         ),
  //       },
  //     ],
  //   },
  // ];
  const [selectedTags, setSelectedTags] = useState<string[]>(["Books"]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <StyledContainer>
      <Sider width={300}>
        <Collapse defaultActiveKey={["1"]}>
          <CollapsePanel header="This is panel header 1" key="1">
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTags.includes(tag)}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </CollapsePanel>
          <CollapsePanel header="This is panel header 2" key="2">
            <p>Hello</p>
          </CollapsePanel>
          <CollapsePanel header="This is panel header 3" key="3">
            <p>Hello</p>
          </CollapsePanel>
        </Collapse>
      </Sider>
    </StyledContainer>
  );
}

export default MainSider;
