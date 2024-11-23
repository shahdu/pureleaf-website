
import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";


import { OrdersContext } from "../../Context/OrderContext";
import { Order } from "./Order";

export const Orders = () => {
  const { orders } = useContext(OrdersContext);


  return (
    <div className="container my-4">
      <h2 className="text-center mb-4" style={{ color: '#388E3C', fontWeight: 'bold' }}>
        Orders Dashboard
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
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <Order key={order.orderId} order={order} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};