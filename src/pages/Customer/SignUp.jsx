import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  Paper,
} from "@mui/material";

import { registerUser, loginUser } from "../../Services/userService";
import hommpage from '../../assets/Images/hommpage.png';

export const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "", 
    image: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };


  const validDataInput = () => {
    const newError = {};
    if (!user.name.trim() || user.name.length < 2) {
      newError.name = "Name must be at least 2 characters";
    }
    // if (!/^[a-zA-Z\s]+$/.test(user.name)) {
    //   newError.name = "Only characters are allowed";
    // }
    if (!user.email.trim()) {
      newError.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)
    ) {
      newError.email = "Enter a valid email address";
    }
    if (!user.password.trim()) {
      newError.password = "Password is required";
    } else if (user.password.length < 8) {
      newError.password = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(user.password)) {
      newError.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(user.password)) {
      newError.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(user.password)) {
      newError.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(user.password)) {
      newError.password =
        "Password must contain at least one special character (e.g., !@#$%^&*)";
    }

    // if (!user.phone.trim()) {
    //   newError.phone = "Phone number is required";
    // } else 
    if (user.phone && !/^\d{10}$/.test(user.phone)) {
      newError.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0; // return true if no error
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validDataInput()) {
      try {
        const registerResponse = await registerUser(
          user.name,
          user.password,
          user.email,
          user.phone, 
          user.image,// Add phone to registration
        );

         // Register the user
         console.log("Registration response:", registerResponse);
 
         // After registration, automatically log in the user
         const loginResponse = await loginUser(user.email, user.password);
         console.log("Login response:", loginResponse);
 
         if (loginResponse.token) {
           localStorage.setItem("token", loginResponse.token);
           localStorage.setItem("isSignIn", true);
 
           navigate("/dashboard/user/profile");
         } else {
           setErrors({ ...errors, server: "Login failed after registration." });
         }
      } catch (error) {
        console.error("Registration failed:", error);
        setErrors({
          ...errors,
          server: "Registration failed. Please try again.",
        });
      }
    }
  };

  const handleSignInRedirect = () => {
    navigate("/signIn"); // Redirects to the login page
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
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            {errors.server && (
              <Typography color="error" align="center" sx={{ mb: 2 }}>
                {errors.server}
              </Typography>
            )}
            <TextField
              label="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={Boolean(errors.email)}
              helperText={errors.email}
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
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
            <TextField
              label="Profile Image URL (Optional)"
              name="image"
              value={user.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
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
              Sign Up
            </Button>
         
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? {""}
            <Link to="/signin" style={{ textDecoration: "none", color: "#2E7D32" }}>
              Sign In
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
//       <h1 className="text-center mb-4">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name:
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={user.name}
//             onChange={handleChange}
//             required
//             className="form-control"
//           />
//           {errors.name && <p className="text-danger">{errors.name}</p>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             value={user.email}
//             onChange={handleChange}
//             required
//             className="form-control"
//           />
//           {errors.email && <p className="text-danger">{errors.email}</p>}
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
//           {errors.password && <p className="text-danger">{errors.password}</p>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phone" className="form-label">
//             Phone Number:
//           </label>
//           <input
//             type="text"
//             name="phone"
//             id="phone"
//             value={user.phone}
//             onChange={handleChange}
//             required
//             className="form-control"
//           />
//           {errors.phone && <p className="text-danger">{errors.phone}</p>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">
//             Profile Image (Optional):
//           </label>
//           <input
//             type="text"
//             name="image"
//             id="image"
//             onChange={handleChange}
//             accept="image/*"
//             className="form-control"
//           />
//         </div>


//         {errors.server && <p className="text-danger">{errors.server}</p>}

//         <button type="submit" className="btn btn-primary w-100">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };
