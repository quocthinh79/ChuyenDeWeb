import styled from "@emotion/styled";
import { Rule } from "antd/es/form";
import { default as FormItemCustom } from "./form-item";

const StyledFormItem = styled(FormItemCustom)``;

export interface FormItemProps {
  name?: string | number | (string | number)[];
  rules: Rule[];
}

export function FormItem({ name, rules }: FormItemProps) {
  const passProps = { name, rules };
  return <StyledFormItem {...passProps}></StyledFormItem>;
}

export default FormItem;
