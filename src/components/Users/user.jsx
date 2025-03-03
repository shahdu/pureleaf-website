import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Button, TableCell, TableRow } from "@mui/material";

import { UsersContext } from "../../Context/UserContext";
import { deleteUserById } from "../../Services/userService";

export const User = ({ user }) => {
  const { refreshUsers } = useContext(UsersContext);

  var role = "Customer";
  if (user.role == 0) {
    role = "Admin";
  }

  const handleDelete = async () => {
    try {
      await deleteUserById(user.userId);
      console.log("Product user:", user.userId);
      refreshUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Format the createdAt date to a more user-friendly format
  const formattedDate = new Date(user.createdAt).toLocaleString("en-US", {
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
      <TableCell>
        <img
          src={user.image}
          alt={user.userName}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid #81C784", // Light green border
          }}
        />
      </TableCell>
      <TableCell>{user.userName}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        {/* Ensure the date stays in one line */}
        <span style={{ whiteSpace: "nowrap" }}>{formattedDate}</span>
      </TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          sx={{
            "&:hover": {
              backgroundColor: "#d32f2f", // Red on hover
              color: "white",
            },
            padding: "6px 12px",
            fontSize: "0.875rem",
            textTransform: "none",
            borderRadius: "20px", // Rounded button
            borderColor: "#81C784", // Light green border color
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
