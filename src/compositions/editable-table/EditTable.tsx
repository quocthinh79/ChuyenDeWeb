import React, { useState } from "react";
import Button from "../../components/button";
import PopConfirm from "../../components/popconfirm";
import Table from "../../components/table";
import { EButtonTypes } from "../../core";
import useEditTable, {
  DataType,
} from "../../hooks/use-editable-table/useEditTable";
import EditableCell from "../editable-cell-table/EditableCell";
import EditableRow from "../editable-row-table/EditableRow";
type EditableTableProps = Parameters<typeof Table>[0];

export interface EditTableProps {
  initialData?: DataType[];
}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

function EditTable({ initialData = [] }: EditTableProps) {
  const { dataSource, onAdd, onDelete, onSave } = useEditTable({ initialData });

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "age",
      dataIndex: "age",
    },
    {
      title: "address",
      dataIndex: "address",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record: any) =>
        dataSource.length >= 1 ? (
          <PopConfirm
            title="Sure to delete?"
            onConfirm={() => onDelete(record.key)}
          >
            <a>Delete</a>
          </PopConfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData: DataType = {
      key: 0,
      name: `Edward King example`,
      age: "32",
      address: `London, Park Lane no. example`,
    };
    onAdd(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: onSave,
      }),
    };
  });
  return (
    <div>
      <Button onClick={handleAdd} type={EButtonTypes.Primary}>
        Add a row
      </Button>
      <Table
        components={components}
        bordered
        dataSource={dataSource}
        columns={columns as ColumnTypes}
      />
    </div>
  );
}

export default EditTable;
