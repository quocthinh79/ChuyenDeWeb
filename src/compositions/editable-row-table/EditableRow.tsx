import { FormInstance } from "antd";
import { useForm } from "antd/es/form/Form";
import { createContext, memo } from "react";
import { Form } from "../../components";

export const EditableContext = createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}

export const EditableRow = ({ index, ...props }: EditableRowProps) => {
  const [form] = useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

export default memo(EditableRow);
