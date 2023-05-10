import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, PopConfirm } from "@components";
import {
  EAdminLaptopColumnShow,
  EButtonTypes,
  IDeleteLaptopReq,
  ITypeDataTable,
  apiDeleteLaptop,
} from "@core";
import { EditableContext, useDisclosure, useEditTable } from "@hooks";
import { Form, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";
import AddModalLaptop from "../../admin-modal/laptop/add-modal-laptop";
import EditModalLaptop from "../../admin-modal/laptop/edit-modal-laptop";
import { useMutation } from "@tanstack/react-query";

export interface TableLaptopProps {
  initialData?: ITypeDataTable[];
}

export function TableLaptop({ initialData = [] }: TableLaptopProps) {
  const { form, onDelete, dataSource } = useEditTable({ initialData });

  const { mutate: deleteLaptop } = useMutation({
    mutationKey: ["deleteLaptop"],
    mutationFn: apiDeleteLaptop,
    onSuccess(data, variables, context) {
      console.log("🚀 ~ file: table-laptop.tsx:23 ~ onSuccess ~ data:", data);
    },
    onError(error, variables, context) {
      console.log("🚀 ~ file: table-laptop.tsx:31 ~ onError ~ error:", error);
    },
  });

  const {
    onClose: onCloseAddModal,
    onOpen: onOpenAddModal,
    open: openAddModal,
  } = useDisclosure({
    initialState: false,
  });

  const {
    onClose: onCloseEditModal,
    onOpen: onOpenEditModal,
    open: openEditModal,
  } = useDisclosure({
    initialState: false,
  });

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

  const submitDeleteLaptop = async ({ ids }: IDeleteLaptopReq) => {
    await deleteLaptop({ ids });
  };

  const defaultColumns: ColumnsType<ITypeDataTable> = [
    ..._columnName,
    {
      title: "Action",
      dataIndex: "Action",
      fixed: "right",
      width: 250,
      render: (_, record) => {
        return dataSource.length >= 1 ? (
          <>
            <Button onClick={() => handleOpenModalClick(record.id)}>
              <EditFilled />
            </Button>
            <PopConfirm
              title="Bạn chắc chứ?"
              cancelText="Hủy"
              okText="Xóa"
              onConfirm={() => submitDeleteLaptop({ ids: [record.id] })}
            >
              <Button type={EButtonTypes.Primary} danger>
                <DeleteFilled />
              </Button>
            </PopConfirm>
          </>
        ) : (
          <></>
        );
      },
    },
  ];

  const [idModal, setIdModal] = useState<number>(0);

  const handleOpenModalClick = (id: number) => {
    setIdModal(id);
    onOpenEditModal();
  };

  const ModalAdd = useMemo(() => {
    return (
      <AddModalLaptop openModal={openAddModal} closeModal={onCloseAddModal} />
    );
  }, [openAddModal]);

  const ModalEdit = useMemo(() => {
    return (
      <EditModalLaptop
        id={idModal}
        data={dataSource}
        closeModal={onCloseEditModal}
        openModal={openEditModal}
      />
    );
  }, [idModal, openEditModal]);

  return (
    <>
      {ModalAdd}
      {ModalEdit}
      <Button
        onClick={onOpenAddModal}
        type={EButtonTypes.Primary}
        icon={<PlusOutlined />}
      />
      <EditableContext.Provider value={form}>
        <Form form={form}>
          <Table
            bordered
            dataSource={dataSource}
            columns={defaultColumns}
            scroll={{ x: 1500, y: 300 }}
          />
        </Form>
      </EditableContext.Provider>
    </>
  );
}

export default TableLaptop;
