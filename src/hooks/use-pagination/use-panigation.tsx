import { useState } from "react";

export interface usePaginationProps {
  currentPage?: number;
  pageSize?: number;
  handleChange?: (page: number, pageSize: number) => void;
}

export function usePagination(): usePaginationProps {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState();

  const handleChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    handleChange,
  };
}

export default usePagination;
