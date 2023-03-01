import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { default as HeaderCustom } from "./header";

export interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

const StyledHeader = styled(HeaderCustom)``;

export function Header({ children, className }: HeaderProps) {
  const passProps = { className };
  return <StyledHeader {...passProps}>{children}</StyledHeader>;
}

export default Header;
