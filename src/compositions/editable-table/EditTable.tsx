import { Form } from "antd";
import Button from "../../components/button";
import PopConfirm from "../../components/popconfirm";
import Table from "../../components/table";
import { EButtonTypes } from "../../core";
import useEditTable, {
  DataType,
  EditableContext,
} from "../../hooks/use-editable-table/useEditTable";
import EditableCell from "../editable-cell-table/EditableCell";
type EditableTableProps = Parameters<typeof Table>[0];

export interface EditTableProps {
  initialData?: DataType[];
  defaultColumnsEditData: {
    title: string;
    editable?: boolean;
    dataIndex: string;
  }[];
}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

function EditTable({
  initialData = [],
  defaultColumnsEditData = [],
}: EditTableProps) {
  const {
    dataSource,
    onAdd,
    onDelete,
    editingKey,
    save,
    form,
    isEditing,
    edit,
    cancel,
  } = useEditTable({
    initialData,
  });

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    ...defaultColumnsEditData,
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record: any) => {
        const editable = isEditing(record);
        return dataSource.length >= 1 ? (
          editable ? (
            <span>
              <Button onClick={() => save(record.key)}>Save</Button>
              <PopConfirm title="Sure to cancel?" onConfirm={cancel}>
                <Button>Cancel</Button>
              </PopConfirm>
            </span>
          ) : (
            <>
              <Button disable={editingKey !== -1} onClick={() => edit(record)}>
                Edit
              </Button>
              <PopConfirm
                title="Sure to delete?"
                onConfirm={() => onDelete(record.key)}
              >
                <Button>Delete</Button>
              </PopConfirm>
            </>
          )
        ) : (
          <></>
        );
      },
    },
  ];

  const components = {
    body: {
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
        editingProp: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Button onClick={onAdd} type={EButtonTypes.Primary}>
        Add a row
      </Button>
      <EditableContext.Provider value={form}>
        <Form form={form}>
          <Table
            components={components}
            bordered
            dataSource={dataSource}
            columns={columns as ColumnTypes}
          />
        </Form>
      </EditableContext.Provider>
    </>
  );
}

export default EditTable;
