import styled from "@emotion/styled";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { Sider } from "../../components";
import SiderItem from "./sider-item";

export function MainSider() {
  const StyledContainer = styled("div")`
    .ant-layout-sider {
      background-color: inherit;
    }
  `;
  const demandData: string[] = [
    "Văn phòng, học tập",
    "2D Design",
    "Quay dựng Video",
    "3D Design",
    "Gaming",
    "Lập trình",
  ];

  const brandData: string[] = [
    "Apple",
    "Dell",
    "HP",
    "Lenovo",
    "Razer",
    "Microsoft",
    "MSI",
    "Asus",
    "Acer",
    "LG",
    "AVITA",
    "GIGABYTE",
    "Samsung",
    "HUAWEI",
    "Colorful",
    "Xiaomi",
  ];

  const productSource: string[] = ["Chính hãng", "Nhập khẩu"];

  const cpu: string[] = [
    "Core i3",
    "Core i5",
    "Core i7",
    "Core i9",
    "Xeon",
    "Ryzen 3",
    "Ryzen 5",
    "Ryzen 7",
    "Ryzen 9",
    "MediaTek",
    "AMD",
    "Celeron",
    "Pentium",
    "Android",
    "M1",
    "M2",
  ];

  console.log("Render");
  return (
    <StyledContainer>
      <Sider width={300}>
        <Collapse>
          <CollapsePanel header="Nhu cầu" key="1">
            <SiderItem children={demandData} />
          </CollapsePanel>
          <CollapsePanel header="Thương hiệu" key="2">
            <SiderItem children={brandData} />
          </CollapsePanel>
          <CollapsePanel header="Nguồn hàng" key="3">
            <SiderItem children={productSource} />
          </CollapsePanel>
          <CollapsePanel header="CPU" key="4">
            <SiderItem children={cpu} />
          </CollapsePanel>
        </Collapse>
      </Sider>
    </StyledContainer>
  );
}

export default MainSider;
