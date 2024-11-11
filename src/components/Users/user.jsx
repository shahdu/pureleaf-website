import React, { useContext }  from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { UsersContext } from "../../Context/UserContext";
import { deleteUserById } from "../../Services/userService";


export const User = ({ user }) => {
  const {  refreshUsers} = useContext(UsersContext);



  const handleDelete = async () => {
    try {
      await deleteUserById(user.userId);
      console.log("Product user:", user.userId);
      refreshUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 4,
        marginBottom: 2,
        borderRadius: 2,
        backgroundColor: "#E8F5E9", // Light green for eco-friendly look
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Needed to position the frame inside the div
        }}
      >
        <img
          src={user.image}
          alt={user.userName}
          style={{
            width: "100%", // Takes the full width of the parent div
            height: "auto", // Maintain the image aspect ratio
            borderRadius: "12px", // Soft corners for the image
            border: "4px solid #A5D6A7", // Green border framing the image
            boxSizing: "border-box", // Ensures the border is part of the total size of the image
          }}
        />
      </div>
      <CardContent>
        <Typography variant="h6" component="div" color="text.primary">
        userName: {user.userName}
        </Typography>

        <Typography variant="h6" component="div" color="text.primary">
        role: {user.role}
        </Typography>

        <Typography variant="h6" component="div" color="text.primary">
        email: {user.email}
        </Typography>

        <Typography variant="h6" component="div" color="text.primary">
        createdAt: {user.createdAt}
        </Typography>
        
        <Typography variant="h6" component="div" color="text.primary">
        phone: {user.phone}
        </Typography>

        <Button
          variant="outlined"
          color="error"
          fullWidth
          sx={{
            marginTop: 2,
            "&:hover": {
              backgroundColor: "#f44336",
              color: "white",
            },
          }}
          onClick={handleDelete}
        >
          Delete USer
        </Button>

      </CardContent>
    </Card>
  );
};
