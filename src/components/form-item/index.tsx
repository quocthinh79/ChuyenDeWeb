import styled from "@emotion/styled";
import { Rule } from "antd/es/form";
import { ReactNode } from "react";
import { default as FormItemCustom } from "./form-item";

const StyledFormItem = styled(FormItemCustom)``;

export interface FormItemProps {
  name?: string | number | (string | number)[];
  rules?: Rule[];
  children?: ReactNode;
  valuePropName?: string;
  wrapperCol?: object;
  label?: string;
}

export function FormItem({
  name,
  rules,
  children,
  valuePropName,
  wrapperCol,
  label,
}: FormItemProps) {
  const passProps = { name, rules, valuePropName, wrapperCol, label };
  return (
    <StyledFormItem style={{ margin: 0 }} {...passProps}>
      {children}
    </StyledFormItem>
  );
}

export default FormItem;
