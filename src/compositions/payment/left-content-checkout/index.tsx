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
  Select,
  Text,
  Title,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import { productItemCheckout } from "@dummy-data";
import { useHandleCartItems } from "@hooks";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import ProductItemInCheckout from "../../product-item-in-checkout";
import SelectProvincesFormItem from "../../select-provinces-form-item";
import { useState } from "react";

export interface LeftContentCheckoutProps {
  form: any;
}

export function LeftContentCheckout({ form }: LeftContentCheckoutProps) {
  const { totalProduct } = useHandleCartItems();
  const [valueInput, setValueInput] = useState<string>("");

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

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
          {productItemCheckout?.map((item) => (
            <ProductItemInCheckout {...item} />
          ))}
        </CollapsePanel>
      </Collapse>
    </Card>
  );
}

export default LeftContentCheckout;
