import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { templateStringToClassName } from "../../core";

export interface FlexProps {
  align?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  basis?: string | number;
  direction?:
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse"
    | "initial"
    | "inherit";
  gap?: string | number;
  grow?: number | string;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  shrink?: number | string;
  spacing?: number | string;
  width?: string | number;
  wrap?: string | number;
  children?: ReactNode;
  className?: string;
}

const StyledFlex = styled("div")``;

export function Flex({
  align = "stretch",
  basis = "auto",
  children,
  className,
  direction = "row",
  gap = 0,
  grow = 0,
  justify = "flex-start",
  shrink = 1,
  spacing = 0,
  width = "100%",
  wrap = "nowrap",
}: FlexProps) {
  if (typeof gap === "number") gap = `${gap}px`;

  const passProps = {
    className: cx(
      className,
      templateStringToClassName()`
        align-items: ${align};
        display: flex;
        flex-basis: ${basis};
        flex-direction: ${direction};
        flex-grow: ${grow};
        flex-shrink: ${shrink};
        flex-wrap: ${wrap};
        gap: ${gap};
        justify-content: ${justify};
        width: ${width};
      `
    ),
  };

  return <StyledFlex {...passProps}>{children}</StyledFlex>;
}

export default Flex;
