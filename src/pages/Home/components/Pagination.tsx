import React from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  isLoading,
}) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  if(isLoading) return null;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        {"<< Anterior"}
      </button>

      {page > 3 && (
        <>
          <button
            className={styles.pageButton}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          {page > 4 && <span className={styles.ellipsis}>...</span>}
        </>
      )}

      {Array.from({ length: 5 }, (_, index) => page - 2 + index)
        .filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages)
        .map((pageNumber) => (
          <button
            key={pageNumber}
            className={`${styles.pageButton} ${
              pageNumber === page ? styles.active : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

      {page < totalPages - 2 && (
        <>
          {page < totalPages - 3 && (
            <span className={styles.ellipsis}>...</span>
          )}
          <button
            className={styles.pageButton}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className={styles.pageButton}
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        {"Próximo >>"}
      </button>
    </div>
  );
};
