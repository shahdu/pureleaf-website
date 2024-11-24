import React from "react";
import { TableCell, TableRow } from "@mui/material";

// Order Component
export const Order = ({ order, index }) => {
  // Format the createdAt date to a user-friendly format
  const formattedDate = new Date(order.createdAt).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "#f1f8e9", // Light green hover effect
        },
      }}
    >
      {/* Order Number */}
      <TableCell>{index + 1}</TableCell>
      <TableCell>{order.orderDate}</TableCell>
      <TableCell>{order.totalAmount}</TableCell>
      <TableCell>{order.user.userName}</TableCell>
      <TableCell>{order.user.email}</TableCell>
      <TableCell>
        <span style={{ whiteSpace: "nowrap" }}>{formattedDate}</span>
      </TableCell>
      <TableCell>{order.user.phone}</TableCell>
    </TableRow>
  );
};
