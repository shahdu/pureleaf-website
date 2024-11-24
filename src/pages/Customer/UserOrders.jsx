import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

import { OrdersContext } from "../../Context/OrderContext";
import { decodeToken } from "../../Utilities/TokenDecode";

export const UserOrders = () => {
  const navigate = useNavigate();
  const { orders, isLoading, error } = useContext(OrdersContext);

  // Retrieve the userId from the token
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/signIn");
    return null;
  }

  const decoded = decodeToken(token);
  const userId = decoded?.nameid;

  // Filter orders based on userId
  const userOrders = orders.filter((order) => order.user?.userId === userId);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" textAlign="center" mb={4}>
        My Orders
      </Typography>

      {userOrders.length === 0 ? (
        <Typography>No orders found for this user.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>Shipment Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userOrders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>
                    {new Date(order.orderDate).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell>{order.totalAmount}</TableCell>
                  <TableCell>
                    {order.shipmentStatus === 0
                      ? "Pending"
                      : "Shipped"} {/* Adjust based on your shipment status */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

