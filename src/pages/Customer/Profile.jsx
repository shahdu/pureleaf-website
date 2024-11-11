import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../../Utilities/TokenDecode";
import { getUserById, updateUser } from "../../Services/userService";
import { Container, Box, Typography, TextField, Button, Avatar, Alert, CircularProgress } from "@mui/material";

export const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    image: "",
  });
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/signIn");
    return null;
  }

  const decoded = decodeToken(token);
  const userId = decoded?.nameid;

  useEffect(() => {
    if (userId) {
      getUserById(userId)
        .then((response) => {
          if (response.success) {
            setUserInfo(response.data);
            setFormData({
              userName: response.data.userName || "",
              email: response.data.email || "",
              phone: response.data.phone || "",
              image: response.data.image || "",
            });
          } else {
            setError("Failed to fetch user data.");
          }
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setError("Error fetching user data.");
        });
    }
  }, [navigate, userId]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await updateUser(userId, formData);
      if (response.success) {
        setUserInfo({ ...userInfo, ...formData });
        setIsEditing(false);
      } else {
        setError("Failed to update user data.");
      }
    } catch (err) {
      console.error("Error updating user data:", err);
      setError("Error updating user data.");
    }
  };

  if (!userInfo) {
    return <CircularProgress color="success" />;
  }

  const role = userInfo.role === 0 ? "Admin" : "Customer";

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          border: "1px solid #d1e7dd",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#388e3c">
          User Profile
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        
        {isEditing ? (
          <>
            <TextField
              label="Username"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ backgroundColor: "#e0f2f1" }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ backgroundColor: "#e0f2f1" }}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ backgroundColor: "#e0f2f1" }}
            />
            <TextField
              label="Profile Image URL"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ backgroundColor: "#e0f2f1" }}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button variant="contained" color="success" onClick={handleSave} sx={{ mr: 2 }}>
                Save
              </Button>
              <Button variant="outlined" color="inherit" onClick={handleEditToggle}>
                Cancel
              </Button>
            </Box>
          </>
        ) : (
          <>
            {userInfo.image && (
              <Avatar
                src={userInfo.image}
                alt="User profile"
                sx={{ width: 100, height: 100, margin: "auto", mb: 2, border: "2px solid #388e3c" }}
              />
            )}
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
              Username: {userInfo.userName || "N/A"}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
              Email: {userInfo.email || "N/A"}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
              Role: {role}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
              Phone: {userInfo.phone || "N/A"}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="success" onClick={handleEditToggle}>
                Edit Profile
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};
