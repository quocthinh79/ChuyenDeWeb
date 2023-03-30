import { LockOutlined } from "@ant-design/icons";
import { FormItem, InputPassword } from "@components";
import React from "react";

function ChangePasswordFormItem() {
  return (
    <FormItem
      name="newPassword"
      rules={[
        {
          required: true,
          message: "Plase enter a password",
        },
      ]}
    >
      <InputPassword prefix={<LockOutlined />} placeholder="Nhập mật khẩu" />
    </FormItem>
  );
}

export default ChangePasswordFormItem;
