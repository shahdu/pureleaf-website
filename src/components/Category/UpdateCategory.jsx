import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CategoryContext } from "../../Context/CategoryContext";
import { getCategoryById, updateCategory } from "../../Services/categoryService";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";

export const UpdateCategory = () => {
  const { categoryId } = useParams();
  const { refresh } = useContext(CategoryContext);
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await getCategoryById(categoryId);
        if (category && category.data) {
          setCategoryName(category.data.categoryName);
        } else {
          setError("Category data not found.");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch category.");
        setLoading(false);
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, [categoryId]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    const updatedData = { categoryName };

    try {
      await updateCategory(categoryId, updatedData);
      refresh();
      navigate("/dashboard/admin/categories");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

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
        Update Category
      </Typography>
      <form onSubmit={handleUpdateCategory} style={{ width: '100%' }}>
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
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#66bb6a',
            color: '#fff',
            '&:hover': { backgroundColor: '#388e3c' },
            mt: 2,
          }}
        >
          Update Category
        </Button>
      </form>
    </Box>
  );
};
