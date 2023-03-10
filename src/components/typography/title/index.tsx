import styled from "@emotion/styled";
import EContentTypeTypography from "../../../core/types/EContentTypeTypography";
import ELevelTile from "../../../core/types/ELevelTitle";
import { Copyable, Editable, Ellipsis } from "../general-types";
import { default as TitleCustom } from "./title";

const StyledTitle = styled(TitleCustom)``;

export interface TitleProps {
  code?: boolean;
  copyable?: boolean | Copyable;
  disabled?: boolean;
  editable?: boolean | Editable;
  ellipsis?: boolean | Ellipsis;
  italic?: boolean;
  level?: ELevelTile;
  mark?: boolean;
  type?: EContentTypeTypography;
  underline?: boolean;
  onClick?: (event: any) => void; // TODO: any type
}

export const Title = ({
  code = false,
  copyable = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  italic = false,
  level = ELevelTile.H1,
  mark = false,
  type,
  underline = false,
  onClick = () => undefined,
}: TitleProps) => {
  const passProps = {
    code,
    copyable,
    disabled,
    editable,
    ellipsis,
    italic,
    level,
    mark,
    type,
    underline,
    onClick,
  };
  return <StyledTitle {...passProps}></StyledTitle>;
};

export default Title;
