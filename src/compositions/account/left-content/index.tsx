import { Button, Card, Form, SizeProps, Space, Title } from "@components";
import { dayjs, EButtonTypes, EDirectionType, EHtmlButtonTypes } from "@core";
import { useForm } from "antd/es/form/Form";
import PersonalInformationFormItem from "./personal-information-form-item";

export function AccountLeftContent() {
  const [form] = useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    console.log(
      `${dayjs(values.birthday).get("date")}/${
        dayjs(values.birthday).get("month") + 1
      }/${dayjs(values.birthday).get("year")}`
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Title level={2}>Thông tin tài khoản</Title>
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
          <Space
            size={SizeProps.Small}
            direction={EDirectionType.Vertical}
            widthFull
          >
            <PersonalInformationFormItem />
          </Space>
          <Button
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

export default AccountLeftContent;
