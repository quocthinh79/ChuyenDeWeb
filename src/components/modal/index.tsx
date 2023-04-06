import { ReactNode } from "react";
import { ButtonProps } from "../button";
import { default as CustomModal } from "./modal";
import styled from "@emotion/styled";
import { EModalWidth } from "@core";
import { useTheme } from "@emotion/react";

export interface ModalProps {
  afterClose?: () => any;
  autoFocusButton?: null | "ok" | "cancel";
  cancelText?: string;
  centered?: boolean;
  closable?: boolean;
  closeIcon?: ReactNode;
  content?: ReactNode;
  title?: ReactNode;
  width?: EModalWidth;
  zIndex?: number;
  onCancel?: () => any;
  onOk?: () => any;
  open?: boolean;
  cancelButtonProps?: ButtonProps;
  okButtonProps?: ButtonProps;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const StyledModal = styled(CustomModal)`
  .ant-modal-content {
    max-height: 95vh;
    overflow: auto;
  }
`;
export function Modal({
  afterClose,
  autoFocusButton = "ok",
  cancelText = "Cancel",
  centered = true,
  closable = true,
  closeIcon = undefined,
  content,
  title,
  width = EModalWidth.Medium,
  zIndex = 1000,
  onCancel,
  onOk,
  cancelButtonProps,
  okButtonProps,
  open,
  footer,
  children,
  className,
}: ModalProps) {
  const theme = useTheme();

  const passProps = {
    afterClose,
    autoFocusButton,
    cancelText,
    centered,
    closable,
    closeIcon,
    content,
    title,
    width: theme?.[width],
    zIndex,
    onCancel,
    onOk,
    open,
    cancelButtonProps,
    okButtonProps,
    footer,
    className,
  };

  return <StyledModal {...passProps}>{children}</StyledModal>;
}

export default Modal;
