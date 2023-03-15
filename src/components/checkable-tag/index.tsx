import styled from "@emotion/styled";
import { default as CheckableTagCustom } from "./checkable-tag";
import { ReactNode } from "react";

const StyledCheckableTag = styled(CheckableTagCustom)``;

export interface CheckableTagProps {
  checked?: boolean;
  children?: ReactNode;
  closable?: boolean;
  closeIcon?: ReactNode;
  color?: string;
  icon?: ReactNode;
  onClose?: (e: any) => void;
}

export const CheckableTag = ({
  checked,
  children,
  closable = false,
  closeIcon,
  color,
  icon,
  onClose,
}: CheckableTagProps) => {
  const passProps = { closable, closeIcon, color, icon, checked, onClose };
  return <CheckableTag {...passProps}>{children}</CheckableTag>;
};
