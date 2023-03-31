import { Button, Card, Form, SizeProps, Space, Title } from "@components";
import { EButtonTypes, EDirectionType, EHtmlButtonTypes } from "@core";
import { useForm } from "antd/es/form/Form";
import AddressInformationFormItem from "./address-information-form-item";

export function AccountRightContent() {
  const [form] = useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Title level={2}>Địa chỉ mặc định</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Space
          size={SizeProps.Large}
          direction={EDirectionType.Vertical}
          widthFull
        >
          <AddressInformationFormItem />
          <Button
            block
            htmlType={EHtmlButtonTypes.Submit}
            type={EButtonTypes.Primary}
          >
            Cập nhật
          </Button>
        </Space>
      </Form>
    </Card>
  );
}

export default AccountRightContent;
