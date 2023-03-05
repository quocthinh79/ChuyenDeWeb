import { Key, useCallback, useState } from "react";

export interface DataType {
  key: number;
  name?: string;
  age?: string;
  address?: string;
}

export interface useEditTableProps {
  initialData: DataType[];
}

export interface useEditTable {
  dataSource: DataType[];
  onAdd: (dataAdding: DataType) => any;
  onSave: (row: DataType) => void;
  onDelete: (key: Key) => void;
}

export const useEditTable = ({
  initialData = [],
}: useEditTableProps): useEditTable => {
  const [dataSource, setDataSource] = useState<DataType[]>(initialData);

  const onAdd = (dataAdding: DataType) => {
    const indexOfArray = dataSource.map((item) => item.key);
    const newData: DataType = {
      ...dataAdding,
      key: Math.max(...indexOfArray) + 1,
    };
    setDataSource([...dataSource, newData]);
  };

  const onSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const onDelete = (key: Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  return {
    dataSource,
    onAdd,
    onDelete,
    onSave,
  };
};

export default useEditTable;
