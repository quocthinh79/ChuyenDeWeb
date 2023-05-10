import { InputText, Modal, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { EAdminModalAccount, EModalWidth } from "@core";
import { useMutation } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

export interface EditModalAccountProps {
  openModal: boolean;
  closeModal: () => void;
  id: number;
  data: any[];
}

export function EditModalAccount({
  closeModal,
  data,
  id,
  openModal,
}: EditModalAccountProps) {
  const _data = Object.entries(EAdminModalAccount).map(([key]) => ({
    [key]: data?.find((item: any) => item?.id === id)?.[key],
  }));

  const [form] = useForm();

  const { mutate: updateLaptop } = useMutation({
    //     mutationKey: ["apiUpdateImageLaptop", "admin", id],
    //     mutationFn: apiUpdateLaptop,
    //     onError: (error) => {
    //       console.log(error);
    //     },
    //     onSuccess: (data) => {},
  });

  const onFinish = async (value: any) => {
    console.log(value);
    await updateLaptop({ id, ...value });
    //     if (!isLoading) closeModal?.();
  };

  const handleSubmit = () => {
    form.submit();
  };

  useEffect(() => {
    form.setFieldsValue(Object.assign({}, ..._data));
  }, [id]);

  return (
    <Modal
      onOk={handleSubmit}
      width={EModalWidth.Small}
      onCancel={closeModal}
      open={openModal}
      closable={false}
      cancelText="Hủy"
      okText="Chỉnh sửa"
      title="Chỉnh sửa"
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
                {Object.keys(EAdminModalAccount).includes(key) ? (
                  <InputText placeholder={`Vui lòng nhập trường ${value}`} />
                ) : (
                  <></>
                )}
              </Form.Item>
            );
          })}
        </Space>
      </Form>
    </Modal>
  );
}

export default EditModalAccount;
