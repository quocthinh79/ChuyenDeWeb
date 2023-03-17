import styled from "@emotion/styled";
import React from "react";
import {
  Card,
  Description,
  DescriptionItem,
  Divider,
  Flex,
  Text,
  Title,
} from "../../components";
import Button from "../../components/button";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import Space from "../../components/space";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import {
  EButtonTypes,
  EDirectionFlex,
  EDirectionType,
  formatCurrency,
} from "../../core";
import EContentTypeTypography from "../../core/types/enum/EContentTypeTypography";
import SliderOverviewProduct from "../slider-overview-product/slider-overview-product";

const StyledCol = styled(Col)`
  height: fit-content;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function DetailProductItem() {
  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      <Col span={15}>
        <Flex direction={EDirectionFlex.Column} gap={SPACE_BETWEEN_ITEMS}>
          <SliderOverviewProduct />
          <Card>
            <Title level={4}>Cấu hình chi tiết</Title>
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Vi xử lý (CPU)">
                Intel Core i7 1250U, 10 nhân, 12 luồng
              </DescriptionItem>
              <DescriptionItem label="RAM">
                32GB, LPDDR5, 5200 MHz
              </DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Màn hình">
                13.4", 1920 x 1200 px, IPS, Chống chói Hz
              </DescriptionItem>
              <DescriptionItem label="Card đồ họa (GPU)">
                Intel® Iris® Xe Graphics
              </DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Lưu trữ">
                SSD 10SPACE_BETWEEN_ITEMSGB
              </DescriptionItem>
              <DescriptionItem label="Pin">51WHr</DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Kết nối chính">
                2 x Type-C, Thunderbolt
              </DescriptionItem>
              <DescriptionItem label="Trọng lượng">1.17 kg</DescriptionItem>
            </Description>
            <Divider />
          </Card>
        </Flex>
      </Col>
      <StyledCol span={9}>
        <Card>
          <Space>
            <Title level={3}>Dell XPS 13 9315 (2022)</Title>
            <Text type={EContentTypeTypography.Secondary}>
              SKU: XPS13931502NO
            </Text>
            <Text textColor="#fe3666" strong>
              {formatCurrency(22990000)}
            </Text>
            <Description column={1} title="Cấu hình">
              <DescriptionItem label="CPU">Intel Core i7 1250U</DescriptionItem>
              <DescriptionItem label="GPU">
                Intel® Iris® Xe Graphics
              </DescriptionItem>
              <DescriptionItem label="RAM">32GB</DescriptionItem>
              <DescriptionItem label="Lưu trữ">
                SSD 10SPACE_BETWEEN_ITEMSGB
              </DescriptionItem>
              <DescriptionItem label="Màu">Sky</DescriptionItem>
            </Description>
          </Space>
          <Divider />
          <Space widthFull>
            <Text textColor="#fe3666" strong>
              {formatCurrency(35990000)}
            </Text>
            <Button block type={EButtonTypes.Primary}>
              Thêm vào giỏ hàng
            </Button>
          </Space>
        </Card>
      </StyledCol>
    </Row>
  );
}

export default DetailProductItem;
