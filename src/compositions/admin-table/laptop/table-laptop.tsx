import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, PopConfirm } from "@components";
import { EAdminLaptopColumnShow, EButtonTypes, ITypeDataTable } from "@core";
import { EditableContext, useDisclosure, useEditTable } from "@hooks";
import { Form, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";
import AddModalLaptop from "../../admin-modal/laptop/add-modal-laptop";
import EditModalLaptop from "../../admin-modal/laptop/edit-modal-laptop";

export interface TableLaptopProps {
  initialData?: ITypeDataTable[];
}

export function TableLaptop({ initialData = [] }: TableLaptopProps) {
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
