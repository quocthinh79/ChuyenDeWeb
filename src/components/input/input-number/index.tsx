import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as InputNumberCustom } from "./input-number";

export interface InputNumberProps {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  bordered?: boolean;
  defaultValue?: number;
}

const StyledInputNumber = styled(InputNumberCustom)``;

export function InputNumber({
  addonAfter,
  addonBefore,
  bordered,
  defaultValue = 1,
}: InputNumberProps) {
  const passProps = { addonAfter, addonBefore, bordered, defaultValue };
  return <StyledInputNumber {...passProps} />;
}

export default InputNumber;
