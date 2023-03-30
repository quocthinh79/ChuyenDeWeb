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
import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterFormItem from "./register-form-item";

function RegisterPage() {
  const [nonDuplicate, setNonDuplicate] = useState(true);
  const [form] = useForm();
  const rePassword = useWatch("re-password", form);
  const password = useWatch("password", form);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    if (rePassword !== password) return setNonDuplicate(false);
    return setNonDuplicate(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Tabs
        items={[
          {
            key: "3",
            label: "Đăng kí",
            children: (
              <Form
                form={form}
                name="register"
                labelCol={{ span: 6 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Space widthFull size={SizeProps.Large}>
                  <RegisterFormItem />
                  {!nonDuplicate && (
                    <Text
                      textAlign={ETextAlign.Center}
                      type={EContentTypeTypography.Danger}
                    >
                      Mật khẩu đã nhập không trùng khớp
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
                    Đăng kí
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

export default RegisterPage;
