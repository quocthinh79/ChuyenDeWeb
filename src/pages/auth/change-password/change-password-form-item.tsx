import { LockOutlined } from "@ant-design/icons";
import { FormItem, InputPassword } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import React from "react";

function ChangePasswordFormItem() {
  return (
    <FormItem
      name="newPassword"
      rules={[
        {
          required: true,
          message: EMPTY_INPUT_ERROR,
        },
      ]}
    >
      <InputPassword prefix={<LockOutlined />} placeholder="Nhập mật khẩu" />
    </FormItem>
  );
}

export default ChangePasswordFormItem;
