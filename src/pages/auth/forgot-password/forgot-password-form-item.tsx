import { FormItem, InputPassword, InputText, Space } from "@components";

export function ForgotPasswordFormItem() {
  return (
    <Space widthFull>
      <FormItem
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <InputText />
      </FormItem>
    </Space>
  );
}

export default ForgotPasswordFormItem;
