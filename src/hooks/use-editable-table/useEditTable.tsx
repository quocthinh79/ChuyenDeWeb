import { FormInstance } from "antd";
import { useForm } from "antd/es/form/Form";
import { createContext, Key, ReactNode, useCallback, useState } from "react";

export const EditableContext = createContext<FormInstance<any> | null>(null);

export interface DataType {
  key: number;
  name?: string | ReactNode;
  age?: string | ReactNode;
  address?: string | ReactNode;
}

export interface useEditTableProps {
  initialData: DataType[];
}

export interface useEditTable {
  dataSource: DataType[];
  form: any;
  save: (key: number) => void;
  onAdd: () => void;
  onDelete: (key: Key) => void;
  isEditing: (record: DataType) => boolean;
  edit: (record: DataType) => void;
  cancel: () => void;
}

export const useEditTable = ({
  initialData = [],
}: useEditTableProps): useEditTable => {
  const [dataSource, setDataSource] = useState<DataType[]>(initialData);
  const [form] = useForm();
  const [editingKey, setEditingKey] = useState(-1);

  const onAdd = useCallback(() => {
    const indexOfArray = dataSource.map((item) => item.key);
    const maxKey = Math.max(...indexOfArray) + 1;
    const newData: DataType = {
      key: maxKey,
      address: "NULL",
      age: "NULL",
      name: "NULL",
    };
    setDataSource([...dataSource, newData]);
    setEditingKey(maxKey);
    console.log(newData);
  }, [dataSource]);

  const save = useCallback(
    async (key: number) => {
      try {
        const row = await form.validateFields();
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          setDataSource(newData);
          setEditingKey(-1);
          console.log(row);
        } else {
          newData.push(row);
          setDataSource(newData);
          setEditingKey(-1);
          console.log(row);
        }
      } catch (errInfo) {
        console.log("Validate Failed:", errInfo);
      }
    },
    [dataSource, form]
  );

  const edit = useCallback(
    (record: DataType) => {
      form.setFieldsValue({ ...record });
      setEditingKey(record.key);
    },
    [form]
  );

  const cancel = () => {
    setEditingKey(-1);
  };

  const onDelete = useCallback(
    (key: Key) => {
      const newData = dataSource.filter((item) => item.key !== key);
      setDataSource(newData);
      console.log(key);
    },
    [dataSource]
  );

  const isEditing = useCallback(
    (record: DataType) => record.key === editingKey,
    [editingKey]
  );

  return {
    dataSource,
    form,
    save,
    onAdd,
    onDelete,
    isEditing,
    edit,
    cancel,
  };
};

export default useEditTable;
