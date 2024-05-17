'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { PaginationProps } from './Pagination.types';

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  // 5페이지씩 grouping한 결과 현재 페이지의 pageGroup
  const pageGroup = Math.ceil(currentPage / 5);

  // 현재 pageGroup의 첫 번째 및 마지막 페이지
  const firstIndex = (pageGroup - 1) * 5 + 1;
  let lastIndex = pageGroup * 5;
  if (lastIndex > totalPages) {
    // 마지막 pageGroup의 경우
    lastIndex = totalPages;
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevGroup = () => {
    setCurrentPage(firstIndex - 1);
  };

  const handleNextGroup = () => {
    setCurrentPage(lastIndex + 1);
  };

  return (
    <div className="w-full flex justify-center gap-[50px] text-body3">
      {pageGroup === 1 ? (
        ''
      ) : (
        <button onClick={handlePrevGroup}>
          <MdKeyboardArrowLeft className="w-5 h-5 text-gray-10" />
        </button>
      )}

      {Array.from(
        { length: totalPages === 1 ? 1 : lastIndex - firstIndex + 1 },
        (_, index) => {
          // 현재 pageGroup의 모든 페이지들
          const pageNumber = firstIndex + index;
          return pageNumber !== currentPage ? (
            <button
              key={index}
              className="w-[34px] h-[34px] rounded-full text-gray-08 hover:bg-gray-03 box-border"
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ) : (
            <button
              key={index}
              className="w-[34px] h-[34px] text-white bg-primary-orange6 rounded-full box-border"
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        },
      )}
      {pageGroup === Math.ceil(totalPages / 5) ? (
        ''
      ) : (
        <button
          onClick={handleNextGroup}
          className="w-[34px] h-[34px] flex justify-center items-center rounded-full bg-white hover:bg-gray-03 box-border"
        >
          <MdKeyboardArrowRight className="w-5 h-5 text-gray-10" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
