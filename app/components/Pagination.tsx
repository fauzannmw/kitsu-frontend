"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => Math.max(1, currentPage - 2) + i
  ).filter((page) => page <= totalPages);

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {currentPage > 1 && (
        <Link
          href={`?page=${currentPage - 1}`}
          className="px-4 py-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-700"
        >
          Previous
        </Link>
      )}
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`px-4 py-2 rounded-full ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`?page=${currentPage + 1}`}
          className="px-4 py-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-700"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
