import { Dispatch, SetStateAction } from 'react';

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
