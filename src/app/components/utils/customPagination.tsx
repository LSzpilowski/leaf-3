"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

interface ICustomPagination {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalPages: number;
}

function CustomPagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: ICustomPagination) {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : undefined
              }
              href="#"
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={`#/page_${index + 1}`}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "font-bold" : ""}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
              onClick={() => {
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default CustomPagination;
