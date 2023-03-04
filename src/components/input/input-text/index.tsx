import styled from "@emotion/styled";
import { ReactNode } from "react";
import { EInputTextSize, EStatusInputText } from "../../../core";
import { default as InputCustom } from "./input-text";

const StyledInputText = styled(InputCustom)``;

export interface InputTextProps {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean | { clearIcon: ReactNode };
  bordered?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  showCount?: boolean;
  status?: EStatusInputText;
  prefix?: ReactNode;
  size?: EInputTextSize;
  suffix?: ReactNode;
  value?: string;
  ref?: any;
  onChange?: () => undefined;
  onPressEnter?: () => any;
  onBlur?: () => any;
}

function InputText({
  addonAfter,
  addonBefore,
  allowClear,
  bordered,
  defaultValue,
  disabled,
  id,
  maxLength,
  showCount,
  status,
  prefix,
  size,
  suffix,
  value,
  ref,
  onChange,
  onPressEnter,
  onBlur,
}: InputTextProps) {
  const passProps = {
    addonAfter,
    addonBefore,
    allowClear,
    bordered,
    defaultValue,
    disabled,
    id,
    maxLength,
    showCount,
    status,
    prefix,
    size,
    suffix,
    value,
    ref,
    onChange,
    onPressEnter,
    onBlur,
  };
  return <StyledInputText type="text" {...passProps} />;
}

export default InputText;
