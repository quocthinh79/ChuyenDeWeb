import {
  Button,
  Card,
  Flex,
  Form,
  RememberMe,
  SizeProps,
  Space,
  Tabs,
} from "@components";
import {
  EButtonTypes,
  EHtmlButtonTypes,
  EJustifyFlex,
  handleSchemaError,
  routerPathFull,
  schemaLogin,
} from "@core";
import { useForm } from "antd/es/form/Form";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormItem from "./login-form-item";

export interface LoginProps {}

export function LoginPage(_props: LoginProps) {
  const onSubmit = async ({ phoneNumber, password }: any) => {};
  const navigation = useNavigate();
  const [form] = useForm();
  const onFinish = (values: any) => {
    try {
      schemaLogin.parse(values);
      navigation("/");
    } catch (error: any) {
      handleSchemaError(error, form);
    }
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <Card>
      <Tabs
        items={[
          {
            key: "1",
            label: "Đăng nhập",
            children: (
              <Form
                form={form}
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Space widthFull size={SizeProps.Large}>
                  <LoginFormItem />
                  <Flex justify={EJustifyFlex.SpaceBetween}>
                    <RememberMe />
                    <Link to={routerPathFull.auth.forgotPass}>
                      Quên mật khẩu
                    </Link>
                  </Flex>
                  <Button
                    block
                    type={EButtonTypes.Primary}
                    htmlType={EHtmlButtonTypes.Submit}
                  >
                    Đăng nhập
                  </Button>
                  <Flex justify={EJustifyFlex.Center}>
                    <Link to={routerPathFull.auth.register}>
                      Đăng kí tài khoản
                    </Link>
                  </Flex>
                </Space>
              </Form>
            ),
          },
        ]}
      />
    </Card>
  );
}

export default memo(LoginPage);
