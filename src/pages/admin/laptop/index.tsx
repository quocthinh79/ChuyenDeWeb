import { TableLaptop } from "@compositions";
import { ITypeDataTable, apiGetMultipleLaptop } from "@core";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface LaptopAdminProps {}

export function LaptopAdmin(props: LaptopAdminProps) {
  const [dataModal, setDataModal] = useState<ITypeDataTable[]>([]);

  const { mutate: getLaptop, isLoading } = useMutation({
    mutationKey: ["apiGetLaptop"],
    mutationFn: apiGetMultipleLaptop,
    onSuccess: (data) => {
      setDataModal(data?.laptopList);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  useEffect(() => {
    async function fetchData() {
      await getLaptop({ start: 1, limit: 10 });
    }
    fetchData();
  }, []);

  return <TableLaptop initialData={dataModal} />;
}

export default LaptopAdmin;
