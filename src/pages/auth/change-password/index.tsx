import { Button, Card, Form, SizeProps, Space, Tabs, Text } from "@components";
import {
  EButtonTypes,
  EDirectionType,
  EHtmlButtonTypes,
  ETextAlign,
  handleSchemaError,
  routerPathFull,
  schemaChangePassword,
} from "@core";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import ChangePasswordFormItem from "./change-password-form-item";

export function ChangePassword() {
  const [form] = useForm();
  const navigation = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    try {
      schemaChangePassword.parse(values);
      navigation(routerPathFull.auth.login);
    } catch (error) {
      console.log(error);
      handleSchemaError(error, form);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card>
      <Tabs
        items={[
          {
            key: "1",
            label: "Mật khẩu mới",
            children: (
              <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <ChangePasswordFormItem />

                <Space
                  widthFull
                  direction={EDirectionType.Vertical}
                  size={SizeProps.Large}
                >
                  <Text textAlign={ETextAlign.Center}>
                    Vui lòng nhập mật khẩu mới bao gồm, 1 chữ viết Hoa, 1 ký tự
                    số
                  </Text>
                  <Button
                    // disabled={!isValid}
                    // loading={isLoading}
                    htmlType={EHtmlButtonTypes.Submit}
                    block
                    type={EButtonTypes.Primary}
                  >
                    Thay đổi mật khẩu
                  </Button>
                </Space>
              </Form>
            ),
          },
        ]}
      />
    </Card>
  );
}

export default ChangePassword;
