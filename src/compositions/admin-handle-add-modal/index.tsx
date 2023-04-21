import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { InputText, Modal, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { EImageEntity, EModalWidth, ILaptop, apiAddLaptop } from "@core";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Upload, UploadFile, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { memo, useState } from "react";
import type { UploadProps } from "antd";
import { RcFile } from "antd/es/upload";

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

  const onFinish = async (
    value: any // avatarFile,
    // battery,
    // brand,
    // chipCpu,
    // color,
    // cpu,
    // display,
    // facilityId,
    // graphics,
    // imageFiles,
    // laptopState,
    // price,
    // productName,
    // quantity,
    // ram,
    // storage,
    // type,
    // weight,
  ) => {
    // const passProps = {
    //   avatarFile,
    //   battery,
    //   brand,
    //   chipCpu,
    //   color,
    //   cpu,
    //   display,
    //   facilityId,
    //   graphics,
    //   imageFiles,
    //   laptopState,
    //   price,
    //   productName,
    //   quantity,
    //   ram,
    //   storage,
    //   type,
    //   weight,
    // };
    // await addLaptop({ ...passProps });
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

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [image, setImage] = useState<UploadFile[]>([]);
  const [multipleFile, setMultipleFile] = useState<UploadFile[]>([]);

  // const handleUpload = () => {
  //   const formData = new FormData();
  //   fileList.forEach((file) => {
  //     formData.append("files[]", file as RcFile);
  //     console.log(file as RcFile);
  //   });
  //   setUploading(true);
  //   // You can use any AJAX library you like
  //   fetch("https://www.mocky.io/v2/5cc8019d300000980a055e76", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       setFileList([]);
  //       message.success("upload successfully.");
  //     })
  //     .catch(() => {
  //       message.error("upload failed.");
  //     })
  //     .finally(() => {
  //       setUploading(false);
  //     });
  // };

  const propsTestWithForm: UploadProps = {
    onRemove: (file) => {
      setImage((pre) => [...pre, file]);
    },
    beforeUpload: (file) => {
      setImage((pre) => [...pre, file]);
      return false;
    },
    fileList: image,
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  const propsUploadTest: UploadProps = {
    name: "images",
    action: "http://localhost:8085/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleUpload = (file: any, fileListKey: any) => {
    setFileList((prevFileList) => {
      // Tạo một bản sao của mảng fileList
      const newFileList = [...prevFileList];
      // Cập nhật file tương ứng vào mảng dựa vào fileListKey
      newFileList[fileListKey] = file;
      // Trả về mảng mới đã được cập nhật
      return newFileList;
    });
  };

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
            if (Object.keys(EImageEntity).includes(key)) {
              return (
                <Form.Item
                  rules={[{ required: true, message: EMPTY_INPUT_ERROR }]}
                  labelCol={{ span: 5 }}
                  key={key}
                  name={key}
                  label={value}
                >
                  {value === EImageEntity.imageFiles ? (
                    <Upload
                      multiple
                      fileList={fileList[index] ? [fileList[index]] : []}
                      beforeUpload={(file) => handleUpload(file, index)}
                    >
                      <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                  ) : (
                    <Upload
                      fileList={fileList[index] ? [fileList[index]] : []}
                      beforeUpload={(file) => handleUpload(file, index)}
                    >
                      <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                  )}
                </Form.Item>
              );
            } else {
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
            }
          })}
        </Space>
      </Form>
    </Modal>
  );
}

export default memo(AdminHandleAddModal);
