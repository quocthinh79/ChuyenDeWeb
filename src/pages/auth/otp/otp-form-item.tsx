import { Flex, FormItem, InputNumber } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
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
            message: EMPTY_INPUT_ERROR,
          },
        ]}
      >
        <InputNumber />
      </FormItem>
    </Flex>
  );
}

export default OtpFormItem;
