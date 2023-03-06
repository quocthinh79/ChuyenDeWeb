import { Input, InputRef } from "antd";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { FormItem } from "../../components";
import {
  DataType,
  EditableContext,
} from "../../hooks/use-editable-table/useEditTable";

interface EditableCellProps {
  title: ReactNode;
  editable: boolean;
  children: ReactNode;
  dataIndex: keyof DataType;
  record: DataType;
  handleSave: (record: DataType) => void;
  dataSource: DataType;
  editingProp: boolean;
}

export interface TypingInputProps {
  dataIndex: string;
  title: string;
  inputRef: any;
  save: () => void;
}

export const TypingInput = ({
  dataIndex,
  title,
  inputRef,
  save,
}: TypingInputProps) => (
  <FormItem
    name={dataIndex}
    rules={[
      {
        required: true,
        message: `${title} is required.`,
      },
    ]}
  >
    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
  </FormItem>
);

function EditableCell({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  dataSource,
  editingProp = false,
  ...restProps
}: EditableCellProps) {
  const [editing, setEditing] = useState(editingProp);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing && editingProp === false) {
      inputRef.current!.focus();
    }
  }, [editing, editingProp]);

  const toggleEdit = () => {
    if (editingProp === false) {
      setEditing(!editing);
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    }
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      toggleEdit();
      handleSave({ ...record, ...dataSource });
    }
  };

  let childNode = children;
  if (editable) {
    childNode =
      editingProp || editing ? (
        <TypingInput
          dataIndex={dataIndex}
          inputRef={inputRef}
          save={save}
          title={title as string}
        />
      ) : (
        <div style={{ height: `32px`, cursor: "pointer" }} onClick={toggleEdit}>
          {children}
        </div>
      );
  }

  return <td {...restProps}>{childNode}</td>;
}

export default EditableCell;
