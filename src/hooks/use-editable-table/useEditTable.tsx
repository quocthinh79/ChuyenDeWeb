import { FormInstance } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  createContext,
  Key,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

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
  onAdd: (dataAdding: DataType) => any;
  onSave: (row: DataType) => void;
  onDelete: (key: Key) => void;
  editingKey: number;
  setEditingKey: any;
  save: (key: number) => void;
  form: any;
}

export const useEditTable = ({
  initialData = [],
}: useEditTableProps): useEditTable => {
  const [dataSource, setDataSource] = useState<DataType[]>(initialData);
  const [form] = useForm();
  const [editingKey, setEditingKey] = useState(-1);

  const onAdd = useCallback(
    (dataAdding: DataType) => {
      const indexOfArray = dataSource.map((item) => item.key);
      const newData: DataType = {
        ...dataAdding,
        key: Math.max(...indexOfArray) + 1,
      };
      setDataSource([...dataSource, newData]);
    },
    [dataSource]
  );

  const onSave = useCallback(
    (row: DataType) => {
      const newData = [...dataSource];
      const index = newData.findIndex((item) => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setDataSource(newData);
    },
    [dataSource]
  );

  const save = async (key: number) => {
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
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey(-1);
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const onDelete = useCallback(
    (key: Key) => {
      const newData = dataSource.filter((item) => item.key !== key);
      setDataSource(newData);
    },
    [dataSource]
  );

  return {
    dataSource,
    onAdd,
    onDelete,
    onSave,
    editingKey,
    setEditingKey,
    save,
    form,
  };
};

export default useEditTable;
