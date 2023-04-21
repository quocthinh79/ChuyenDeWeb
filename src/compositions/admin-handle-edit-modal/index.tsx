import { InputText, Modal } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { EModalWidth } from "@core";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { memo, useEffect } from "react";

export interface AdminHandleEditModalProps {
  allColumnName: object;
  data: any[];
  onCloseModal?: () => void;
  openModal?: boolean;
  id: number;
}

export function AdminHandleEditModal({
  id,
  data,
  onCloseModal,
  openModal,
  allColumnName,
}: AdminHandleEditModalProps) {
  const [form] = useForm();

  const handleSubmit = () => {
    form.submit();
  };

  const onFinish = (values: any) => {
    console.log(values);
    onCloseModal?.();
  };

  const _data = Object.entries(allColumnName).map(([key]) => ({
    [key]: data?.find((item: any) => item?.id === id)?.[key],
  }));

  useEffect(() => {
    form.setFieldsValue(Object.assign({}, ..._data));
  }, [id]);

  return (
    <Modal
      onOk={handleSubmit}
      width={EModalWidth.Small}
      onCancel={onCloseModal}
      open={openModal}
      closable={false}
    >
      <Form encType="multipart/form-data" form={form} onFinish={onFinish}>
        {Object.entries(allColumnName).map(([key, value]) => (
          <Form.Item
            rules={[{ required: true, message: EMPTY_INPUT_ERROR }]}
            labelCol={{ span: 6 }}
            key={key}
            name={key}
            label={value}
          >
            <InputText placeholder={`Vui lòng nhập trường ${value}`} />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
}

export default memo(AdminHandleEditModal);
