import React, { useContext, useState } from 'react';
import { TextField } from '@mui/material';

import { UsersContext } from '../../Context/UserContext';


export const UserSearchInput = () => {
   const { setSearchValue} = useContext(UsersContext);
   
  const handleSearchChange = (e) => {
    const value = e.target.value;
   setSearchValue(value);
   console.log(value);
  };

  return (
      <TextField lable = "Serach Users" 
      variant='outlined'
      fullWidth
         onChange={handleSearchChange}
      margin="normal"
      />
  );
  
}; 