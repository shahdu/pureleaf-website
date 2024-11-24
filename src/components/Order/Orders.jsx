import React, { useContext } from "react";
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { OrdersContext } from "../../Context/OrderContext";
import { Order } from "./Order";

// Orders Component
export const Orders = () => {
  const { orders } = useContext(OrdersContext);

  return (
    <div className="container my-4">
      <h2
        className="text-center mb-4"
        style={{ color: "#388E3C", fontWeight: "bold" }}
      >
        Orders Dashboard
      </h2>

      <TableContainer component={Paper} sx={{ borderRadius: "10px", boxShadow: 4 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#81C784", // Light green header background
              }}
            >
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Order #</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Order Date</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Total Amount</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Username</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Created At</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders && orders.length > 0 ? (
              orders.map((order, index) => (
                <Order key={order.orderId} order={order} index={index} />
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
