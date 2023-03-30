import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as InputPasswordCustom } from "./input-password";

export interface InputPasswordProps {
  iconRender?: (visible: any) => ReactNode;
  visibilityToggle?: boolean;
}

const StyledInputPassword = styled(InputPasswordCustom)``;

export function InputPassword({
  iconRender,
  visibilityToggle,
}: InputPasswordProps) {
  const passProps = { iconRender, visibilityToggle };
  return <StyledInputPassword {...passProps} />;
}

export default InputPassword;
