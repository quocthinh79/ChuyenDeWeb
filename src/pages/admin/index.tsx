import { Tabs } from "../../components";
import EditTable from "../../compositions/editable-table/EditTable";
import { ITypeDataTable } from "../../core";

function AdminPage() {
  const initialDataDell: ITypeDataTable[] = [
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

  const defaultColumnEditDataDell = [
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

  const initialDataMSI: ITypeDataTable[] = [
    {
      key: 0,
      nameMSI: "Edward King 0",
      addressMSI: "London, Park Lane no. 0",
    },
    {
      key: 1,
      nameMSI: "Edward King 1",
      addressMSI: "London, Park Lane no. 1",
    },
  ];

  const defaultColumnEditDataMSI = [
    {
      title: "nameMSI",
      dataIndex: "nameMSI",
      editable: true,
    },
    {
      title: "addressMSI",
      dataIndex: "addressMSI",
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
              initialData={initialDataDell}
              defaultColumnsEditData={defaultColumnEditDataDell}
            />
          ),
        },
        {
          key: "1",
          label: "MSI",
          children: (
            <EditTable
              initialData={initialDataMSI}
              defaultColumnsEditData={defaultColumnEditDataMSI}
            />
          ),
        },
      ]}
    />
  );
}

export default AdminPage;
