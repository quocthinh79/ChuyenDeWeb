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
  ILaptopInformation,
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

function DetailProductItem({
  battery,
  color,
  cpu,
  disk,
  gpu,
  mainConnect,
  name,
  price,
  ram,
  screen,
  weight,
  image,
}: ILaptopInformation) {
  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      <Col span={15}>
        <Flex direction={EDirectionFlex.Column} gap={SPACE_BETWEEN_ITEMS}>
          <SliderOverviewProduct image={image} />
          <Card>
            <Title level={4}>Cấu hình chi tiết</Title>
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Vi xử lý (CPU)">{cpu}</DescriptionItem>
              <DescriptionItem label="RAM">{ram}</DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Màn hình">{screen}</DescriptionItem>
              <DescriptionItem label="Card đồ họa (GPU)">{gpu}</DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Lưu trữ">{disk}</DescriptionItem>
              <DescriptionItem label="Pin">{battery}</DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Kết nối chính">
                {mainConnect}
              </DescriptionItem>
              <DescriptionItem label="Trọng lượng">{weight}</DescriptionItem>
            </Description>
            <Divider />
          </Card>
        </Flex>
      </Col>
      <StyledCol span={9}>
        <Card>
          <Space>
            <Title level={3}>{name}</Title>
            <Text type={EContentTypeTypography.Secondary}>
              SKU: XPS13931502NO
            </Text>
            <Text textColor="#fe3666" strong>
              {formatCurrency(price)}
            </Text>
            <Description column={1} title="Cấu hình">
              <DescriptionItem label="CPU">{cpu}</DescriptionItem>
              <DescriptionItem label="GPU">{gpu}</DescriptionItem>
              <DescriptionItem label="RAM">{ram}</DescriptionItem>
              <DescriptionItem label="Lưu trữ">{disk}</DescriptionItem>
              <DescriptionItem label="Màu">{color}</DescriptionItem>
            </Description>
          </Space>
          <Divider />
          <Space widthFull>
            <Text textColor="#fe3666" strong>
              {formatCurrency(price)}
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
