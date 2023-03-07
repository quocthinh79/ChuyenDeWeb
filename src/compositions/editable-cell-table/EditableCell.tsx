import { Input } from "antd";
import { ReactNode } from "react";
import { FormItem } from "../../components";
import { DataType } from "../../hooks/use-editable-table/useEditTable";

interface EditableCellProps {
  title: ReactNode;
  editable: boolean;
  children: ReactNode;
  dataIndex: keyof DataType;
  record: DataType;
  dataSource: DataType;
  editingProp: boolean;
  handleSave: (key: number) => void;
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
        message: `${title} is required.`,
      },
    ]}
  >
    <Input />
  </FormItem>
);

function EditableCell({
  title,
  editable,
  children,
  dataIndex,
  editingProp = false,
  ...restProps
}: EditableCellProps) {
  let childNode = children;
  if (editable) {
    childNode = editingProp ? (
      <TypingInput dataIndex={dataIndex} title={title as string} />
    ) : (
      <div style={{ height: `32px` }}>{children}</div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
}

export default EditableCell;
