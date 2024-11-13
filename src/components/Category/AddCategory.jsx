import React, { useState, useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

export const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { handleAddCategory } = useContext(CategoryContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    handleAddCategory(categoryName);
    setCategoryName("");
    navigate("/dashboard/admin/categories");
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: 500,
        margin: 'auto',
        mt: 5,
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: '#2e7d32', mb: 2 }}>
        Add Category
      </Typography>
      <TextField
        variant="outlined"
        label="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        fullWidth
        sx={{
          backgroundColor: '#fff',
          mb: 2,
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#b0bec5' },
            '&:hover fieldset': { borderColor: '#2e7d32' },
          },
        }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: '#66bb6a',
          color: '#fff',
          '&:hover': { backgroundColor: '#388e3c' },
          mt: 2,
        }}
      >
        Add Category
      </Button>
    </Box>
  );
};
