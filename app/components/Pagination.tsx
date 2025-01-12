"use client";

import Link from "next/link";
import styled from "styled-components";

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
    <Container>
      {currentPage > 1 && (
        <Button href={`?page=${currentPage - 1}`}>Previous</Button>
      )}
      {pageNumbers.map((page) => (
        <Button key={page} href={`?page=${page}`} active={page === currentPage}>
          {page}
        </Button>
      ))}
      {currentPage < totalPages && (
        <Button href={`?page=${currentPage + 1}`}>Next</Button>
      )}
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Button = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;

  background-color: ${(props) => (props.active ? "#2563eb" : "#e5e7eb")};
  color: ${(props) => (props.active ? "white" : "#374151")};

  &:hover {
    background-color: ${(props) => (props.active ? "#1e40af" : "#d1d5db")};
    color: ${(props) => (props.active ? "white" : "#1f2937")};
  }
`;
