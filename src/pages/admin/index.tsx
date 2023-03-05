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

  return <EditTable initialData={initialData} />;
}

export default AdminPage;
