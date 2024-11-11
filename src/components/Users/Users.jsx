import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";

import { User } from "./user";
import { UsersContext } from "../../Context/UserContext";

export const Users = () => {
  const { users } = useContext(UsersContext);


  return (
    <div className="container my-4">
      <h2 className="text-center mb-4" style={{ color: '#388E3C', fontWeight: 'bold' }}>
        Users Dashboard
      </h2>

      <TableContainer component={Paper} sx={{ borderRadius: "10px", boxShadow: 4 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#81C784", // Light green background for header
                color: "#fff", // White text for header
              }}
            >
              <TableCell>Image</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <User key={user.userId} user={user} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};