// import React, { useContext } from 'react';
// import { CategoryContext } from '../../Context/CategoryContext';
// import { useNavigate } from 'react-router-dom';
// import { Button, CircularProgress, Alert, Box, Typography, List, ListItem } from '@mui/material';

// export const CategoryList = () => {
//   const { categories, loading, error } = useContext(CategoryContext);
//   const navigate = useNavigate();

//   const handleAddCategory = () => {
//     navigate('/dashboard/admin/addCategory');
//   };

//   return (
//     <Box className="container mt-5" sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Categories
//       </Typography>

//       {loading ? (
//         <CircularProgress color="primary" />
//       ) : error ? (
//         <Alert severity="error">{error}</Alert>
//       ) : (
//         <List sx={{ mt: 2, borderRadius: 1, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
//           {categories.map((category) => (
//             <ListItem
//               key={category.categoryId}
//               sx={{
//                 backgroundColor: '#f5f5f5',
//                 borderBottom: '1px solid #ddd',
//                 padding: 2,
//                 '&:last-child': { borderBottom: 'none' },
//                 '&:hover': { backgroundColor: '#e0e0e0' },
//               }}
//             >
//               {category.categoryName}
//             </ListItem>
//           ))}
//         </List>
//       )}

//       <Button
//         variant="contained"
//         onClick={handleAddCategory}
//         sx={{
//           mt: 3,
//           backgroundColor: '#2e7d32',
//           color: '#fff',
//           '&:hover': { backgroundColor: '#1b5e20' },
//         }}
//       >
//         Add Category
//       </Button>
//     </Box>
//   );
// };
import React from "react";
import { Categories } from "./Categories";
import { CateSearchInput } from "./CateSearchInput";
import { CatePagination } from "./CatePagination";

export const CategoryList = () => {
  return (
    <div>
      <CateSearchInput />
      <Categories />
      <CatePagination />
    </div>
  );
};
