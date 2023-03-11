import { cx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { ReactNode } from "react";
import {
  EBreakpoint,
  styledComponent,
  templateStringToClassName,
} from "../../core";

const StyledContainerFixed = styledComponent("div")``;

export interface ContainerFixedProps {
  children?: ReactNode;
  className?: string;
  breakpoint?: EBreakpoint;
  position?: "left" | "center" | "right";
}

export function ContainerFixed({
  children,
  className,
  breakpoint = EBreakpoint.XS,
  position = "left",
}: ContainerFixedProps) {
  const theme = useTheme();

  const passProps = {
    className: cx(
      className,
      templateStringToClassName()`
         width: 100%;
         max-width: ${(() => {
           switch (breakpoint) {
             case "xs":
               return theme.screenXS;
             case "sm":
               return theme.screenSM;
             case "md":
               return theme.screenMD;
             case "lg":
               return theme.screenLG;
             case "xl":
               return theme.screenXL;
             case "xxl":
               return theme.screenXXL;

             default:
               return "md";
           }
         })()}px;
         ${(() => {
           switch (position) {
             case "center":
               return "margin: auto";
             case "right":
               return "margin-left: auto; margin-right: 0;";

             default:
               return "";
           }
         })()}
       `
    ),
  };
  return <StyledContainerFixed {...passProps}>{children}</StyledContainerFixed>;
}

export default ContainerFixed;
