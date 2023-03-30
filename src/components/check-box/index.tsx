import styled from "@emotion/styled";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { ReactNode } from "react";
import { default as CheckBoxCustom } from "./check-box";

export interface CheckBoxProps {
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
  children?: ReactNode;
}

const StyledCheckBox = styled(CheckBoxCustom)``;

export function CheckBox({
  autoFocus = false,
  checked = false,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  onChange,
  children,
}: CheckBoxProps) {
  const passProps = {
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    onChange,
  };
  return <StyledCheckBox {...passProps}>{children}</StyledCheckBox>;
}

export default CheckBox;
