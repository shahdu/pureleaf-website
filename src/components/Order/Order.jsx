

import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Button, TableCell, TableRow } from "@mui/material";


export const Order = ({ order }) => {


  // Format the createdAt date to a more user-friendly format
  const formattedDate = new Date(order.createdAt).toLocaleString("en-US", {
    weekday: "short", // Abbreviated day of the week
    year: "numeric",  // Full year
    month: "short",   // Abbreviated month
    day: "numeric",   // Day of the month
    hour: "numeric",  // Hour in 12-hour format
    minute: "numeric", // Minute
    second: "numeric", // Second
    hour12: true,     // Use 12-hour clock
  });

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "#f1f8e9", // Light green hover effect
        },
      }}
    >
      <TableCell>{order.orderDate}</TableCell>
      <TableCell>{order.totalAmount}</TableCell>
      <TableCell>{order.user.userName}</TableCell>
      <TableCell>{order.user.email}</TableCell>
      <TableCell>{order.user.phone}</TableCell>

      <TableCell>
        {/* Ensure the date stays in one line */}
        <span style={{ whiteSpace: "nowrap" }}>{formattedDate}</span>
      </TableCell>
      <TableCell>{order.user.phone}</TableCell>
      <TableCell>
  
      </TableCell>
    </TableRow>
  );
};
