export interface PaginationProps {
  totalRecords: number;
  pageLimit: number;
  setPaginationOrderList: (props: SetPaginationArgs) => void;
}

export interface SetPaginationArgs {
  offset: number;
  pageLimit: number;
}
