import { InputText, Modal, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { EAdminModalAccount, EModalWidth } from "@core";
import { useMutation } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";

export interface AddModalAccountProps {
  openModal: boolean;
  closeModal: () => void;
}

export function AddModalAccount({
  closeModal,
  openModal,
}: AddModalAccountProps) {
  const [form] = useForm();

  const { mutate: addLaptop, isLoading } = useMutation({
    //     mutationKey: ["apiAddLaptop"],
    //     mutationFn: apiAddLaptop,
    //     onSuccess: (data) => {
    //       console.log(data);
    //     },
    //     onError: (error: any) => {
    //       console.log(error);
    //     },
  });

  const onFinish = async (value: any) => {
    await addLaptop(value);
    if (!isLoading) closeModal?.();
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <Modal
      onOk={handleSubmit}
      width={EModalWidth.Small}
      onCancel={closeModal}
      open={openModal}
      closable={false}
      cancelText="Hủy"
      okText="Thêm mới"
      title="Thêm mới"
    >
      <Form encType="multipart/form-data" form={form} onFinish={onFinish}>
        <Space widthFull>
          {Object.entries(EAdminModalAccount).map(([key, value], index) => {
            return (
              <Form.Item
                rules={[{ required: true, message: EMPTY_INPUT_ERROR }]}
                labelCol={{ span: 5 }}
                key={key}
                name={key}
                label={value}
              >
                <InputText placeholder={`Vui lòng nhập trường ${value}`} />
              </Form.Item>
            );
          })}
        </Space>
      </Form>
    </Modal>
  );
}

export default AddModalAccount;
