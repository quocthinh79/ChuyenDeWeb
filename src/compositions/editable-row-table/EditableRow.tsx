import { memo, useContext } from "react";
import { Form } from "../../components";
import { EditableContext } from "../../hooks/use-editable-table/useEditTable";

interface EditableRowProps {
  index: number;
}

export const EditableRow = ({ index, ...props }: EditableRowProps) => {
  const form = useContext(EditableContext)!;
  return (
    <Form form={form} component={false}>
      <tr {...props} />
    </Form>
  );
};

export default memo(EditableRow);
