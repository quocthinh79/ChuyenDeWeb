import styled from "@emotion/styled";
import { ReactNode } from "react";
import { InputTextProps } from "../input-text";
import { default as InputSearchCustom } from "./input-search";

const StyledInputSearch = styled(InputSearchCustom)`
  width: auto;
`;

export interface InputSearchProps extends InputTextProps {
  enterButton?: boolean | ReactNode;
  loading?: boolean;
  onSearch?: (value: any, event: any) => void;
}

function InputSearch({
  placeholder,
  enterButton,
  size,
  loading,
}: InputSearchProps) {
  const passProps = { placeholder, enterButton, size, loading };
  return <StyledInputSearch {...passProps} />;
}

export default InputSearch;
