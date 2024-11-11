import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { UsersContext } from '../../Context/UserContext';

export const UserSearchInput = () => {
  const { setSearchValue } = useContext(UsersContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log(value);
  };

  return (
    <TextField
      label="Search Users"
      variant="outlined"
      fullWidth
      onChange={handleSearchChange}
      margin="normal"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px", // Rounded corners
          backgroundColor: "#f5f5f5", // Light gray background
          transition: "all 0.3s ease", // Smooth transition
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
          "&:hover": {
            backgroundColor: "#e8e8e8", // Darker gray on hover
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)", // Stronger shadow on hover
          },
        },
        "& .MuiInputLabel-root": {
          color: "#4CAF50", // Light green label color
          transition: "all 0.3s ease",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d1d1d1", // Light gray border
          transition: "all 0.3s ease",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#81C784", // Light green on hover
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#4CAF50", // Green on focus
        },
        "& .MuiOutlinedInput-input": {
          color: "#333", // Dark text color
        },
      }}
    />
  );
};
