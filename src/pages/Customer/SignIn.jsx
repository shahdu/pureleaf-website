import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, TextField, Typography, Button, Container, Paper } from "@mui/material";

import { loginUser } from "../../Services/userService";
import { decodeToken } from "../../Utilities/TokenDecode";
import hommpage from '../../assets/Images/hommpage.png';


export const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user.email || !user.password) {
      setError("Email and password are required.");
      return;
    }
  
    try {
      console.log("Login payload:", user);
  
      const response = await loginUser(user.email, user.password);
  
      console.log("Login response:", response);
  
      if (response.token && response.token !== "Email/Password is incorrect") {
        // Save token and navigate to home
        localStorage.setItem("token", response.token);
        localStorage.setItem("isSignIn", true);
        // const role = token ? JSON.parse(atob(token.split('.')[1])).role : null;
//         const token = localStorage.getItem("token");
//         const decoded = decodeToken(token);
//  console.log(decoded);

        navigate("/dashboard/user/profile"); // Redirect to homepage
      } else {
        setError("Email/Password is incorrect");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };
  

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${hommpage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xs" sx={{ position: "relative", zIndex: 2 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            {error && (
              <Typography color="error" align="center" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{
                mt: 3,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#2E7D32",
                },
              }}
            >
              Sign In
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none", color: "#2E7D32" }}>
              Sign Up
            </Link>
          </Typography>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Sign In</h1>
//       <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
//         {error && <p className="text-danger">{error}</p>}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={user.email}
//             onChange={handleChange}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password:
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={user.password}
//             onChange={handleChange}
//             required
//             className="form-control"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };
