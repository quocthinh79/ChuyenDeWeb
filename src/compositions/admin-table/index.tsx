import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, PopConfirm } from "@components";
import { EAdminModalLaptop, EButtonTypes, ITypeDataTable } from "@core";
import { EditableContext, useDisclosure, useEditTable } from "@hooks";
import { Form, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState, useMemo } from "react";
import AdminHandleAddModal from "../admin-handle-add-modal";
import AdminHandleEditModal from "../admin-handle-edit-modal";

export interface AdminTableProps {
  initialData?: ITypeDataTable[];
  defaultColumnsEditData: ColumnsType<ITypeDataTable>;
}

function AdminTable({
  initialData = [],
  defaultColumnsEditData = [],
}: AdminTableProps) {
  const { form, onDelete, dataSource } = useEditTable({ initialData });

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

  const defaultColumns: ColumnsType<ITypeDataTable> = [
    ...defaultColumnsEditData,
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
              onConfirm={() => onDelete(record.id)}
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
      <AdminHandleAddModal
        allColumnName={EAdminModalLaptop}
        onCloseModal={onCloseAddModal}
        openModal={openAddModal}
      />
    );
  }, [idModal, openAddModal]);

  const ModalEdit = useMemo(() => {
    return (
      <AdminHandleEditModal
        id={idModal}
        data={dataSource}
        allColumnName={EAdminModalLaptop}
        onCloseModal={onCloseEditModal}
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

export default AdminTable;
