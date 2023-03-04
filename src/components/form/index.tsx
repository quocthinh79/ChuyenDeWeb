import styled from "@emotion/styled";
import { FormInstance } from "antd";
import { ComponentType, ReactNode } from "react";
import { default as FormCustom } from "./form";

const StyledForm = styled(FormCustom)``;

export interface FormProps {
  form?: FormInstance;
  component?: ComponentType | boolean | any;
  children?: ReactNode;
}

export function Form({ form, component, children }: FormProps) {
  const passProps = { form, component };
  return <StyledForm {...passProps}>{children}</StyledForm>;
}

export default Form;
