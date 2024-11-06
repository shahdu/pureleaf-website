import React, { useContext, useState } from 'react';
import { TextField } from '@mui/material';

import { ProductContext } from '../../Context/ProductContext';


export const SearchInput = () => {
   const { setSearchValue} = useContext(ProductContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
   setSearchValue(value);
   console.log(value);
  };

  return (
      <TextField lable = "Serach Products" 
      variant='outlined'
      fullWidth
         onChange={handleSearchChange}
      margin="normal"
      />
  );
  
}; 