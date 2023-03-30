import { useTheme } from "@emotion/react";
import { Card, Divider, Flex, Text } from "../../components";
import Button from "../../components/button";
import Space from "../../components/space";
import { EButtonTypes, EJustifyFlex, formatCurrency } from "../../core";

export interface TotalPriceInCartProps {
  totalPrice: number;
}

function TotalPriceInCart({ totalPrice }: TotalPriceInCartProps) {
  const { colorPrice } = useTheme();

  return (
    <Card>
      <Space widthFull>
        <Text strong>Tóm tắt đơn hàng</Text>
        <Divider />
        <Flex justify={EJustifyFlex.SpaceBetween}>
          <Text>Tổng cộng</Text>
          <Text textColor={colorPrice} strong>
            {formatCurrency(totalPrice)}
          </Text>
        </Flex>
        <Button block type={EButtonTypes.Primary}>
          Thanh toán
        </Button>
      </Space>
    </Card>
  );
}

export default TotalPriceInCart;
