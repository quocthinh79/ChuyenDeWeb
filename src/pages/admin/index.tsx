import { Tabs } from "@components";
import { EAdminLaptopColumnShow, ITypeDataTable, apiGetLaptop } from "@core";
import { AdminTable } from "@compositions";
import { ColumnsType } from "antd/es/table";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function AdminLaptopPage() {
  const initialDataDell: ITypeDataTable[] = [
    {
      // battery: "li-on 6 cell",
      brand: "Lenovo",
      // chipCpu: "i9",
      // color: "Đen",
      cpu: "i9 1250p",
      // createBy: "anonymousUser",
      // createdDate: "2023-04-19T04:14:27.000+00:00",
      // display: "4k",
      // graphics: "Nvidia GTX 3060 8GB",
      id: 1,
      // key: 1,
      // laptopState: "HOT",
      // linkAvatar: null,
      // modifiedBy: "anonymousUser",
      // modifiedDate: "2023-04-19T04:14:27.000+00:00",
      price: 40000000,
      productName: "Thinkpad x1 carbon gen 10",
      // quantity: 10,
      // ram: "31GB",
      // storage: "1TB SSD",
      // type: "gaming",
      // weight: "1.08kg",
      abc: "Hello",
    },
  ];

  const defaultColumnEditDataDell: ColumnsType = [
    {
      title: "name",
      dataIndex: "name",
      width: 100,
    },
    {
      title: "age",
      dataIndex: "age",
      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
    },
    {
      title: "address",
      dataIndex: "address",

      width: 100,
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
    },
    {
      title: "addressMSI",
      dataIndex: "addressMSI",
    },
  ];

  const [columnName, setColumnName] = useState<ColumnsType<ITypeDataTable>>([]);
  const [data, setData] = useState<ITypeDataTable[]>([]);
  const [dataModal, setDataModal] = useState<ITypeDataTable[]>([]);

  const { mutate: getLaptop, isLoading } = useMutation({
    mutationKey: ["apiGetLaptop"],
    mutationFn: apiGetLaptop,
    onSuccess: (data) => {
      setColumnName(
        Object.keys(data?.laptopList[0])
          .filter(
            (item) =>
              item === "id" ||
              item === "brand" ||
              item === "productName" ||
              item === "price" ||
              item === "cpu"
          )
          .map((item) => {
            return {
              title: item,
              dataIndex: item,
              width: 200,
              ellipsis: true,
            };
          })
      );
      setDataModal(data?.laptopList);
      // console.log(
      //   data?.laptopList?.map((item: any) => {
      //     return {
      //       ...item,
      //       key: item?.id,
      //     };
      //   })
      // );
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  useEffect(() => {
    async function fetchData() {
      await getLaptop({ start: 1, limit: 3 });
    }
    fetchData();
  }, []);

  // console.log(Object.keys(data?.laptopList?.[0]));

  const _columnName: ColumnsType<ITypeDataTable> = Object.entries(
    EAdminLaptopColumnShow
  ).map(([key, value]) => {
    return {
      title: value,
      dataIndex: key,
      width: 200,
      ellipsis: true,
    };
  });

  return (
    <Tabs
      items={[
        {
          key: "0",
          label: "Dell",
          children: (
            <AdminTable
              initialData={dataModal}
              defaultColumnsEditData={_columnName}
            />
          ),
        },
        {
          key: "1",
          label: "MSI",
          children: (
            <AdminTable
              initialData={initialDataMSI}
              defaultColumnsEditData={_columnName}
            />
          ),
        },
      ]}
    />
  );
}

export default AdminLaptopPage;
