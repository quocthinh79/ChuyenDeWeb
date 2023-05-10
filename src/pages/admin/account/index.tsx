import { TableAccount } from "@compositions";
import { apiGetMultipleAccounts } from "@core";
import { useQuery } from "@tanstack/react-query";

export interface AccountAdminPageProps {}

export function AccountAdminPage(props: AccountAdminPageProps) {
  const { data } = useQuery({
    queryKey: ["apiGetMultipleAccounts"],
    queryFn: () => apiGetMultipleAccounts(),
    onSuccess(data) {
      console.log("🚀 ~ file: index.tsx:15 ~ onSuccess ~ data:", data);
    },
  });

  return <TableAccount initialData={data} />;
}

export default AccountAdminPage;
