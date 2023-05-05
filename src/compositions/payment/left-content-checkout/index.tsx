import {
  Card,
  Col,
  // Collapse,
  // CollapsePanel,
  Divider,
  Form,
  FormItem,
  InputText,
  Radio,
  Row,
  Text,
  Title,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import { IGetCartOfUserRes, apiGetCartOfUser } from "@core";
import { useHandleCartItems } from "@hooks";
import { useStorageToken } from "@store";
import { useQuery } from "@tanstack/react-query";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { useState } from "react";
import ProductItemInCheckout from "../../product-item-in-checkout";
import SelectProvincesFormItem from "../../select-provinces-form-item";

export interface LeftContentCheckoutProps {
  form: any;
}

export function LeftContentCheckout({ form }: LeftContentCheckoutProps) {
  const { totalProduct } = useHandleCartItems();
  const [valueInput, setValueInput] = useState<string>("");

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const { token } = useStorageToken();

  const {
    data,
    refetch,
    isSuccess: getCartSuccess,
    isLoading: loadingGetCart,
  } = useQuery<IGetCartOfUserRes>({
    refetchOnWindowFocus: false,
    queryKey: ["getCartItems"],
    queryFn: () => apiGetCartOfUser({ token }),
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {},
  });

  const { laptopDTOs, totalPayment } = data || {};

  return (
    <Card>
      <Title level={2}>Phương thức nhận hàng</Title>
      <Radio checked>Giao tận nơi</Radio>
      <Divider />
      <Title level={4}>Thông tin người nhận</Title>
      <Form
        fields={[{ name: ["address"], value: valueInput }]}
        form={form}
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
          <Col span={12}>
            <FormItem
              name="name"
              rules={[
                {
                  required: true,
                  message: "Không được bỏ trống",
                },
              ]}
              label="Họ và tên người nhận"
            >
              <InputText />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Không được bỏ trống",
                },
              ]}
              label="Số điện thoại người nhận"
            >
              <InputText />
            </FormItem>
          </Col>
          <Col span={12}>
            <SelectProvincesFormItem setValueInput={setValueInput} />
          </Col>
          <Col span={12}>
            <FormItem
              name="address-detail"
              rules={[
                {
                  required: true,
                  message: "Không được bỏ trống",
                },
              ]}
              label="Địa chỉ nhận hàng"
            >
              <InputText />
            </FormItem>
            <Text>Có thể là số nhà, tên đường, tòa nhà. VD: Số 53 Thái Hà</Text>
          </Col>
        </Row>
      </Form>
      <Divider />
      <Collapse defaultActiveKey={["1"]}>
        <CollapsePanel header={`Sản phẩm trong đơn (${totalProduct})`} key="1">
          {laptopDTOs?.map(
            ({
              linkAvatar,
              id,
              productName,
              price,
              quantity,
              cpu,
              ram,
              storage,
            }) => (
              <ProductItemInCheckout
                key={id}
                laptopID={id}
                laptopImage={linkAvatar}
                laptopName={productName}
                totalPriceOfItem={price}
                quantity={quantity}
                laptopSummary={[cpu, ram, storage]}
              />
            )
          )}
        </CollapsePanel>
      </Collapse>
    </Card>
  );
}

export default LeftContentCheckout;
