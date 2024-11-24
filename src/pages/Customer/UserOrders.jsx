import React, { useContext } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
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
    return (
      <Typography variant="h6" align="center" color="textSecondary">
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" align="center" color="error">
        Error: {error.message}
      </Typography>
    );
  }

  return (
    <div className="container my-4">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ color: "#388E3C", fontWeight: "bold" }}
      >
        My Orders
      </Typography>

      {userOrders.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          No orders found for this user.
        </Typography>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ borderRadius: "10px", boxShadow: 4, marginTop: 2 }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#81C784", // Light green header background
                }}
              >
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  # (Index)
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Order Date
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Total Amount
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Shipment Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userOrders.map((order, index) => (
                <TableRow key={order.orderId}>
                  <TableCell>{index + 1}</TableCell> {/* Index starts from 1 */}
                  <TableCell>
                    {new Date(order.orderDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                  <TableCell>{`$${order.totalAmount.toFixed(2)}`}</TableCell>
                  <TableCell>
                    {order.shipmentStatus === 0 ? "Pending" : "Shipped"}
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
