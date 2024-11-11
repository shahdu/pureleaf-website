import React, { useContext } from 'react';
import { Pagination } from '@mui/material';
import { ProductContext } from '../Context/ProductContext';

export const PaginationCom = () => {
  const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={pageNumber}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
      sx={{
        marginTop: 3,
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-root': {
          color: '#228B22', // Forest Green for normal state
          border: '2px solid #228B22', // Border in forest green
          fontWeight: 'bold',
        },
        '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: '#32CD32', // Lime Green for selected page
          color: 'white',
          '&:hover': {
            backgroundColor: '#3CB371', // Medium Sea Green on hover
          },
        },
        '& .MuiPaginationItem-root:hover': {
          backgroundColor: '#98FB98', // Pale green on hover for non-selected pages
        },
      }}
    />
  );
};
