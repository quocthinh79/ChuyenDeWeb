import {
  Button,
  Card,
  Flex,
  Form,
  SizeProps,
  Space,
  Tabs,
  Text,
} from "@components";
import {
  EButtonTypes,
  EContentTypeTypography,
  EHtmlButtonTypes,
  EJustifyFlex,
  ETextAlign,
  routerPathFull,
} from "@core";
import { useForm, useWatch } from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import ForgotPasswordFormItem from "./forgot-password-form-item";
import { useState } from "react";

function ForgotPasswordPage() {
  const [form] = useForm();
  const username = useWatch("username", form);
  const [accountExists, setAccountExist] = useState(true);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate(routerPathFull.auth.otp);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Tabs
        items={[
          {
            key: "2",
            label: "Quên mật khẩu",
            children: (
              <Form
                form={form}
                name="forgot-password"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Space widthFull size={SizeProps.Large}>
                  <ForgotPasswordFormItem />
                  {!accountExists && (
                    <Text
                      textAlign={ETextAlign.Center}
                      type={EContentTypeTypography.Danger}
                    >
                      Tài khoản bạn tìm kiếm không tồn tại
                    </Text>
                  )}
                  <Flex justify={EJustifyFlex.FlexEnd}>
                    <Link to={routerPathFull.auth.login}>
                      Quay trở lại đăng nhập
                    </Link>
                  </Flex>
                  <Button
                    block
                    type={EButtonTypes.Primary}
                    htmlType={EHtmlButtonTypes.Submit}
                  >
                    Tìm tài khoản
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

export default ForgotPasswordPage;
