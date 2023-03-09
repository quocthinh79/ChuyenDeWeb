import { Input } from "antd";
import { ReactNode } from "react";
import { FormItem } from "../../components";

interface EditableCellProps {
  title: ReactNode;
  editable: boolean;
  children: ReactNode;
  dataIndex: string;
  editingProp: boolean;
}

export interface TypingInputProps {
  dataIndex: string;
  title: string;
}

export const TypingInput = ({ dataIndex, title }: TypingInputProps) => (
  <FormItem
    name={dataIndex}
    rules={[
      {
        required: true,
        message: `${title} là bắt buộc`,
      },
    ]}
  >
    <Input placeholder={`Nhập thông tin cho trường ${title}`} />
  </FormItem>
);

function EditableCell({
  title,
  children,
  dataIndex,
  editingProp = false,
}: EditableCellProps) {
  let childNode = children;
  childNode = editingProp ? (
    <TypingInput dataIndex={dataIndex} title={title as string} />
  ) : (
    <div style={{ height: `32px` }}>{children}</div>
  );

  return <td>{childNode}</td>;
}

export default EditableCell;
