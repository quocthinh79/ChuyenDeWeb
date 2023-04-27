import { UploadOutlined } from "@ant-design/icons";
import { Button } from "@components";
import { FormInstance, Upload, UploadFile } from "antd";
import { useEffect, useState } from "react";

export interface UploadMultipleFileProps {
  form: FormInstance<any>;
  name: string;
}

export function UploadMultipleFile({ form, name }: UploadMultipleFileProps) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleRemove = (file: UploadFile) => {
    const index = fileList.indexOf(file);
    const newFileList = [...fileList];
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const handleUpload = (file: any) => {
    setFileList((pre) => [...pre, file]);
    return false;
  };

  useEffect(() => {
    form.setFieldValue(name, fileList);
  }, [fileList]);

  return (
    <Upload
      accept=".png,.jpg,.jpeg"
      multiple={true}
      fileList={fileList}
      beforeUpload={handleUpload}
      onRemove={handleRemove}
    >
      <Button icon={<UploadOutlined />}>Select Multiple File</Button>
    </Upload>
  );
}

export default UploadMultipleFile;
