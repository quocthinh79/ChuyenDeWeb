import React from "react";
import { Flex, Image, Text, Title } from "../../components";
import Button from "../../components/button";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import {
  EButtonTypes,
  EDirectionFlex,
  EFlexAlign,
  EJustifyFlex,
  formatCurrency,
} from "../../core";

function ProductItemCart() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={4}>
        <Image
          preview={false}
          src="https://images.thinkgroup.vn/unsafe/152x152/filters:background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2023/1/14/Lenovo-ThinkPad-P16-Gen-1-Mobile-WorkStation-2022-H1.jpeg"
        />
      </Col>
      <Col span={16}>
        <Title level={4}>Dell Alienware X14 (AlienwareX1401NS)</Title>
        <Text>Abc</Text>
      </Col>
      <Col span={4}>
        <Flex direction={EDirectionFlex.Column} align={EFlexAlign.Center}>
          <Text textColor="#fe3666" strong>
            {formatCurrency(100000000)}
          </Text>
          <Button type={EButtonTypes.Primary} block danger>
            Xóa khỏi giỏ hàng
          </Button>
        </Flex>
      </Col>
    </Row>
  );
}

export default ProductItemCart;
