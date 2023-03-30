import { FormItem, InputPassword, InputText, Space } from "@components";

export function LoginFormItem() {
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
      <FormItem
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <InputPassword />
      </FormItem>
    </Space>
  );
}

export default LoginFormItem;
