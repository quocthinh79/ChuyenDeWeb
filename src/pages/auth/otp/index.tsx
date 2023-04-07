import { Button, Card, Flex, SizeProps, Space, Text, Title } from "@components";
import {
  EButtonTypes,
  EDirectionFlex,
  EDirectionType,
  EFlexAlign,
  EHtmlButtonTypes,
  EJustifyFlex,
  ETextAlign,
  routerPathFull,
} from "@core";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import OtpFormItem from "./otp-form-item";

function OTP() {
  const navigation = useNavigate();
  const [form] = useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigation(routerPathFull.auth.newPassword);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Flex
        direction={EDirectionFlex.Column}
        align={EFlexAlign.Center}
        justify={EJustifyFlex.Center}
      >
        <Space widthFull size={SizeProps.Large}>
          {/* <Logo width={LOGO_INTRO} src={`${assets.getImages(LOGO)}`} /> */}
          <Space
            widthFull
            direction={EDirectionType.Vertical}
            size={SizeProps.Large}
          >
            <Flex direction={EDirectionFlex.Column}>
              <Title textAlign={ETextAlign.Center} level={3}>
                Xác minh tài khoản
              </Title>
              <Text textAlign={ETextAlign.Center}>
                Vui lòng nhập mã xác minh được gửi tới
              </Text>
            </Flex>
            <Form
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <OtpFormItem />
              <Text textAlign={ETextAlign.Center}>
                Không nhận được mã xác minh?
              </Text>
              <Space
                widthFull
                direction={EDirectionType.Vertical}
                size={SizeProps.Large}
              >
                <Flex justify={EJustifyFlex.SpaceBetween}>
                  <Button
                    type={EButtonTypes.Link}
                    onClick={() => navigation(routerPathFull.auth.forgotPass)}
                  >
                    Quay lại
                  </Button>
                  <Button
                    //    onClick={onClickSendOtpAgain}
                    type={EButtonTypes.Link}
                    //    loading={sendOtp}
                  >
                    Gửi lại mã
                  </Button>
                </Flex>
                <Button
                  //    disabled={!isValid}
                  //    loading={isLoadingVerifyOtp}
                  type={EButtonTypes.Primary}
                  htmlType={EHtmlButtonTypes.Submit}
                  block
                >
                  Tiếp tục
                </Button>
              </Space>
            </Form>
          </Space>
        </Space>
      </Flex>
    </Card>
  );
}

export default OTP;
