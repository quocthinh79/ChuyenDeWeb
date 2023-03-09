import { Form } from "antd";
import Button from "../../components/button";
import PopConfirm from "../../components/popconfirm";
import Table from "../../components/table";
import { EButtonTypes, ITypeDataTable } from "../../core";
import useEditTable, {
  EditableContext,
} from "../../hooks/use-editable-table/useEditTable";
import EditableCell from "../editable-cell-table/EditableCell";
export type EditableTableProps = Parameters<typeof Table>[0];

export interface EditTableProps {
  initialData?: ITypeDataTable[];
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
  const { dataSource, form, isEditing, onAdd, onDelete, save, edit, cancel } =
    useEditTable({ initialData });

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex?: string;
  })[] = [
    ...defaultColumnsEditData,
    {
      title: "Action",
      dataIndex: "Action",
      width: "10%",
      render: (_, record: any) => {
        const editing = isEditing(record);
        return dataSource.length >= 1 ? (
          editing ? (
            <>
              <Button onClick={() => save(record.key)}>Save</Button>
              <PopConfirm title="Sure to cancel?" onConfirm={cancel}>
                <Button>Cancel</Button>
              </PopConfirm>
            </>
          ) : (
            <>
              <Button onClick={() => edit(record)}>Edit</Button>
              <PopConfirm
                title="Sure to delete?"
                onConfirm={() => onDelete(record.key)}
              >
                <Button type={EButtonTypes.Primary} danger>
                  Delete
                </Button>
              </PopConfirm>
            </>
          )
        ) : (
          <></>
        );
      },
    },
  ];

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: ITypeDataTable) => ({
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
            components={{
              body: {
                cell: EditableCell,
              },
            }}
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
