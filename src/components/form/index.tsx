import styled from "@emotion/styled";
import { FormInstance } from "antd";
import { ComponentType } from "react";
import { default as FormCustom } from "./form";

const StyledForm = styled(FormCustom)``;

export interface FormProps {
  form?: FormInstance;
  component?: ComponentType | boolean | any;
}

export function Form({ form, component }: FormProps) {
  const passProps = { form, component };
  return <StyledForm {...passProps}></StyledForm>;
}

export default Form;
