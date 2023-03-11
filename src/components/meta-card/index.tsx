import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { default as MetaCardCustom } from "./meta-card";

const StyledMetaCard = styled(MetaCardCustom)``;

export interface MetaCardProps {
  avatar?: ReactNode;
  className?: string;
  description?: ReactNode;
  style?: CSSProperties;
  title?: ReactNode;
  children?: ReactNode;
}

export function MetaCard({
  avatar,
  className,
  description,
  style,
  title,
  children,
}: MetaCardProps) {
  const passProps = { avatar, className, description, style, title };
  return <StyledMetaCard {...passProps}>{children}</StyledMetaCard>;
}

export default MetaCard;
