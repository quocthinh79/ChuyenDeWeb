import { useTheme } from "@emotion/react";
import {
  Card,
  Flex,
  Image,
  IncreaseInput,
  Text,
  Title,
} from "../../components";
import Button from "../../components/button";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import Space, { SizeProps } from "../../components/space";
import {
  EButtonTypes,
  EDirectionFlex,
  EDirectionType,
  EFlexAlign,
  EJustifyFlex,
  formatCurrency,
} from "../../core";
import { arrayToString } from "../../core/utilities/array";

export interface ProductItemCartProps {
  laptopID: number;
  laptopName: string;
  laptopSummary: string[];
  laptopPrice: number;
  laptopImage: string;
  removeItemFromCart?: () => void;
}

function ProductItemCart({
  laptopID,
  laptopName = "This is Laptop Name",
  laptopPrice = 0,
  laptopSummary = [],
  laptopImage = "",
  removeItemFromCart,
}: ProductItemCartProps) {
  const { colorPrice } = useTheme();
  const _laptopSummary = arrayToString(laptopSummary || []);

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Flex justify={EJustifyFlex.Center} align={EFlexAlign.Center}>
            <Image preview={false} src={laptopImage} />
          </Flex>
        </Col>
        <Col span={13} offset={1}>
          <Title level={4}>{laptopName}</Title>
          <Space size={SizeProps.Large} direction={EDirectionType.Vertical}>
            <Text>{_laptopSummary}</Text>
            <IncreaseInput />
          </Space>
        </Col>
        <Col span={6}>
          <Flex
            justify={EJustifyFlex.SpaceAround}
            direction={EDirectionFlex.Column}
            align={EFlexAlign.Center}
          >
            <Text textColor={colorPrice} strong>
              {formatCurrency(laptopPrice || 0)}
            </Text>
            <Button
              onClick={removeItemFromCart}
              type={EButtonTypes.Primary}
              block
              danger
            >
              Xóa khỏi giỏ hàng
            </Button>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductItemCart;
