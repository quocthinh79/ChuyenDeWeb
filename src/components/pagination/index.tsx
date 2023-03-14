import styled from "@emotion/styled";
import { default as PaginationCustom } from "./pagination";
import { ReactNode } from "react";

const StyledPagination = styled(PaginationCustom)``;

export interface PaginationProps {
  current?: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  //   itemRender //TODO: Missing prop
  pageSize?: number;
  pageSizeOptions?: string[] | number[];
  responsive?: boolean;
  showLessItems?: boolean;
  showQuickJumper?: boolean | { goButton: ReactNode };
  showSizeChanger?: boolean;
  showTitle?: boolean;
  //   showTotal?: (total: any, range: any) => void; //TODO: Missing prop
  simple?: boolean;
  size?: "default" | "small";
  total?: number;
  onChange?: (page: any, pageSize: any) => void;
  onShowSizeChange?: (current: any, size: any) => void;
}

export const Pagination = ({
  current,
  defaultCurrent,
  defaultPageSize,
  disabled,
  hideOnSinglePage,
  onChange,
  onShowSizeChange,
  pageSize,
  pageSizeOptions,
  responsive,
  showLessItems,
  showQuickJumper,
  showSizeChanger,
  showTitle,
  //   showTotal,
  simple,
  size,
  total,
}: PaginationProps) => {
  const passProps = {
    current,
    defaultCurrent,
    defaultPageSize,
    disabled,
    hideOnSinglePage,
    onChange,
    onShowSizeChange,
    pageSize,
    pageSizeOptions,
    responsive,
    showLessItems,
    showQuickJumper,
    showSizeChanger,
    showTitle,
    //     showTotal,
    simple,
    size,
    total,
  };
  return <StyledPagination {...passProps} />;
};
