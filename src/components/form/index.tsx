import styled from "@emotion/styled";
import { FormInstance } from "antd";
import { ComponentType, ReactNode, CSSProperties } from "react";
import { default as FormCustom } from "./form";

const StyledForm = styled(FormCustom)``;

export interface FormProps {
  form?: FormInstance;
  component?: ComponentType | boolean | any;
  children?: ReactNode;
  name?: string;
  labelCol?: object;
  wrapperCol?: object;
  style?: CSSProperties;
  initialValues?: object;
  onFinish?: (values: any) => void;
  onFinishFailed?: (props: any) => void;
  autoComplete?: string;
}

export function Form({
  form,
  component,
  children,
  autoComplete,
  initialValues,
  labelCol = { span: 5 },
  name,
  onFinish,
  onFinishFailed,
  style,
  wrapperCol,
}: FormProps) {
  const passProps = {
    form,
    component,
    autoComplete,
    initialValues,
    labelCol,
    name,
    onFinish,
    onFinishFailed,
    style,
    wrapperCol,
  };
  return <StyledForm {...passProps}>{children}</StyledForm>;
}

export default Form;
