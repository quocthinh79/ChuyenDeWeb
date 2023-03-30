import styled from "@emotion/styled";
import { ReactNode, forwardRef } from "react";
import { default as InputNumberCustom } from "./input-number";

export interface InputNumberProps {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  bordered?: boolean;
  defaultValue?: number;
  value?: number;
  ref?: React.Ref<HTMLInputElement>;
}

const StyledInputNumber = styled(InputNumberCustom)``;

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ addonAfter, addonBefore, bordered, defaultValue = 1, value }, ref) => {
    const passProps = {
      addonAfter,
      addonBefore,
      bordered,
      defaultValue,
      value,
    };
    return <StyledInputNumber ref={ref} {...passProps} />;
  }
);

export default InputNumber;
