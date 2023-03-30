import { Flex, FormItem, InputNumber } from "@components";
import { EJustifyFlex } from "@core";
import { message } from "antd";

function OtpFormItem() {
  return (
    <Flex justify={EJustifyFlex.Center}>
      <FormItem
        name="otp"
        rules={[
          {
            required: true,
            message: "Please input your otp!",
          },
        ]}
      >
        <InputNumber />
      </FormItem>
    </Flex>
  );
}

export default OtpFormItem;
