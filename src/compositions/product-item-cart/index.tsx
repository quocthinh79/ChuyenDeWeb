import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  Col,
  Flex,
  Image,
  InputNumber,
  Row,
  SizeProps,
  Space,
  SpaceCompact,
  Text,
  Title,
} from "@components";
import {
  EButtonTypes,
  EDirectionFlex,
  EDirectionType,
  EFlexAlign,
  EJustifyFlex,
  formatCurrency,
} from "@core";
import { arrayToString } from "../../core/utilities/array";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";

export interface ProductItemCartProps {
  laptopID: number;
  laptopName: string;
  laptopSummary: string[];
  laptopPrice: number;
  laptopImage: string;
  quantity: number;
  removeItemFromCart?: () => void;
}

function ProductItemCart({
  laptopID,
  laptopName = "This is Laptop Name",
  laptopPrice = 0,
  laptopSummary = [],
  laptopImage = "",
  quantity = 1,
  removeItemFromCart,
}: ProductItemCartProps) {
  const { colorPrice } = useTheme();
  const _laptopSummary = arrayToString(laptopSummary || []);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(quantity);

  const increase = () => {
    setValue(Number(inputRef.current?.value) + 1);
  };

  const decrease = () => {
    if (Number(inputRef.current?.value) > 1)
      setValue(Number(inputRef.current?.value) - 1);
  };

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
            <Space>
              <SpaceCompact>
                <Button onClick={decrease} icon={<MinusOutlined />}></Button>
                <InputNumber value={value} ref={inputRef} />
                <Button onClick={increase} icon={<PlusOutlined />}></Button>
              </SpaceCompact>
            </Space>
          </Space>
        </Col>
        <Col span={6}>
          <Flex
            justify={EJustifyFlex.SpaceAround}
            direction={EDirectionFlex.Column}
            align={EFlexAlign.Center}
          >
            <Text textColor={colorPrice} strong>
              {formatCurrency(laptopPrice * value || 0)}
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
