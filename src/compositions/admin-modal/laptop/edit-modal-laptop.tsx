import { InputText, Modal, Space } from "@components";
import { UploadMultipleFile, UploadSingleFile } from "@compositions";
import { EMPTY_INPUT_ERROR } from "@constant";
import { EAdminModalLaptop, EImageEntity, EModalWidth } from "@core";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

export interface EditModalLaptopProps {
  openModal: boolean;
  closeModal: () => void;
  id: number;
  data: any[];
}

export function EditModalLaptop({
  openModal,
  closeModal,
  id,
  data,
}: EditModalLaptopProps) {
  const [form] = useForm();

  const onFinish = async (value: any) => {
    console.log(value);
    //     await addLaptop(value);
    //     if (!isLoading) closeModal?.();
  };

  const handleSubmit = () => {
    form.submit();
  };

  const _data = Object.entries(EAdminModalLaptop).map(([key]) => ({
    [key]: data?.find((item: any) => item?.id === id)?.[key],
  }));

  useEffect(() => {
    //     refetch();
    form.setFieldsValue(Object.assign({}, ..._data));

    // TODO: Handle get image form db
    form.setFieldValue("avatarFile", [
      {
        uid: "1",
        name: "xxx.png",
        url: "http://www.baidu.com/xxx.png",
      },
    ]);
    form.setFieldValue("imageFiles", [
      {
        uid: "1",
        name: "xxx.png",
        url: "http://www.baidu.com/xxx.png",
      },
      {
        uid: "2",
        name: "yyy.png",
        url: "http://www.baidu.com/yyy.png",
      },
      {
        uid: "3",
        name: "zzz.png",
        url: "http://www.baidu.com/zzz.png",
      },
    ]);
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
          {Object.entries(EAdminModalLaptop).map(([key, value], index) => {
            return (
              <Form.Item
                rules={[{ required: true, message: EMPTY_INPUT_ERROR }]}
                labelCol={{ span: 5 }}
                key={key}
                name={key}
                label={value}
              >
                {Object.keys(EImageEntity).includes(key) ? (
                  `${value}` === `${EImageEntity.imageFiles}` ? (
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

export default EditModalLaptop;
