import { UploadOutlined } from "@ant-design/icons";
import { Button } from "@components";
import { FormInstance, Upload, UploadFile } from "antd";
import { useEffect, useState } from "react";

export interface UploadSingleFileProps {
  form: FormInstance<any>;
  name: string;
}

export function UploadSingleFile({ form, name }: UploadSingleFileProps) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleRemove = () => {
    setFileList([]);
  };

  const handleUpload = (file: any) => {
    setFileList([file]);
    return false;
  };

  useEffect(() => {
    form.setFieldValue(name, fileList);
  }, [fileList]);

  return (
    <Upload
      //  listType="picture-card"
      accept=".png,.jpg,.jpeg"
      multiple={false}
      fileList={fileList}
      beforeUpload={handleUpload}
      onRemove={handleRemove}
    >
      <Button icon={<UploadOutlined />}>Select File</Button>
    </Upload>
  );
}

export default UploadSingleFile;
