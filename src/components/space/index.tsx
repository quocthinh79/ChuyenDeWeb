import { ReactNode } from "react";
import { EAlignSpace, EDirectionType, styledComponent } from "../../core";
import { default as SpaceCustom } from "./space";

const StyledSpace = styledComponent(SpaceCustom)``;

enum SizeProps {
  Small = "small",
  Middle = "middle",
  Large = "large",
}

export interface SpaceProps {
  align?: EAlignSpace;
  direction?: EDirectionType;
  split?: ReactNode;
  wrap?: boolean;
  size?: SizeProps | SizeProps[] | number | number[];
  children?: ReactNode;
}

function Space({ align, direction, size, split, wrap, children }: SpaceProps) {
  const passProps = { align, direction, size, split, wrap };
  return <StyledSpace {...passProps}>{children}</StyledSpace>;
}

export default Space;
