import { Tabs } from "../../components";
import EditTable from "../../compositions/editable-table/EditTable";
import { DataType } from "../../hooks/use-editable-table/useEditTable";

function AdminPage() {
  const initialData: DataType[] = [
    {
      key: 0,
      name: "Edward King 0",
      age: "32",
      address: "London, Park Lane no. 0",
    },
    {
      key: 1,
      name: "Edward King 1",
      age: "32",
      address: "London, Park Lane no. 1",
    },
  ];

  const defaultColumnEditData = [
    {
      title: "name",
      dataIndex: "name",
      editable: true,
    },
    {
      title: "age",
      dataIndex: "age",
      editable: true,
    },
    {
      title: "address",
      dataIndex: "address",
      editable: true,
    },
  ];

  return (
    <Tabs
      items={[
        {
          key: "0",
          label: "Dell",
          children: (
            <EditTable
              initialData={initialData}
              defaultColumnsEditData={defaultColumnEditData}
            />
          ),
        },
        {
          key: "1",
          label: "MSI",
          children: (
            <EditTable
              initialData={initialData}
              defaultColumnsEditData={defaultColumnEditData}
            />
          ),
        },
      ]}
    />
  );
}

export default AdminPage;
