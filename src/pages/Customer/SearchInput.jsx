import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { ProductContext } from "../../Context/ProductContext";

export const SearchInput = () => {
  const { setSearchValue } = useContext(ProductContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log(value);
  };

  return (
    <TextField
      label="Search Products"
      variant="outlined"
      fullWidth
      onChange={handleSearchChange}
      margin="normal"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px", // Smooth rounded corners
          backgroundColor: "#f5f5f5", // Light gray background
          transition: "all 0.3s ease", // Smooth transition for hover/focus
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
          "&:hover": {
            backgroundColor: "#e8e8e8", // Darker gray on hover
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)", // Slightly stronger shadow on hover
          },
        },
        "& .MuiInputLabel-root": {
          color: "#4CAF50", // Light green label color
          transition: "all 0.3s ease", // Smooth label transition
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d1d1d1", // Light gray border
          transition: "all 0.3s ease", // Smooth border transition
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#81C784", // Light green border on hover
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#4CAF50", // Green border on focus
        },
        "& .MuiOutlinedInput-input": {
          color: "#333", // Dark text for better contrast
        },
      }}
    />
  );
};
