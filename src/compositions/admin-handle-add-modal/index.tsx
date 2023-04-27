import { InputText, Modal, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { EImageEntity, EModalWidth, apiAddLaptop } from "@core";
import { useMutation } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { memo } from "react";
import UploadMultipleFile from "../upload-multiple-file";
import UploadSingleFile from "../upload-single-file";

export interface AdminHandleAddModalProps {
  allColumnName: object;
  onCloseModal?: () => void;
  openModal?: boolean;
}

export function AdminHandleAddModal({
  onCloseModal,
  openModal,
  allColumnName,
}: AdminHandleAddModalProps) {
  const [form] = useForm();

  const handleSubmit = () => {
    form.submit();
  };

  const onFinish = async (value: any) => {
    await addLaptop(value);
    onCloseModal?.();
  };

  const { mutate: addLaptop, isLoading } = useMutation({
    mutationKey: ["apiAddLaptop"],
    mutationFn: apiAddLaptop,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  return (
    <Modal
      onOk={handleSubmit}
      width={EModalWidth.Small}
      onCancel={onCloseModal}
      open={openModal}
      closable={false}
      cancelText="Hủy"
      okText="Thêm mới"
      title="Thêm mới"
    >
      <Form encType="multipart/form-data" form={form} onFinish={onFinish}>
        <Space widthFull>
          {Object.entries(allColumnName).map(([key, value], index) => {
            return (
              <Form.Item
                rules={[{ required: true, message: EMPTY_INPUT_ERROR }]}
                labelCol={{ span: 5 }}
                key={key}
                name={key}
                label={value}
              >
                {Object.keys(EImageEntity).includes(key) ? (
                  value === EImageEntity.imageFiles ? (
                    <UploadMultipleFile form={form} name={key} />
                  ) : (
                    <UploadSingleFile form={form} name={key} />
                  )
                ) : (
                  <InputText placeholder={`Vui lòng nhập trường ${value}`} />
                )}
              </Form.Item>
            );
          })}
        </Space>
      </Form>
    </Modal>
  );
}

export default memo(AdminHandleAddModal);
