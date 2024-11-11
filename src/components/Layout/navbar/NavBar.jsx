import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/Images/PureLeaf.jpg";

export const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
  const role = decodedToken ? decodedToken.role : null;

  const handleLogout = () => {
    localStorage.removeItem("isSignIn");
    localStorage.removeItem("token");
    setTimeout(() => navigate("/signIn"), 100);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "rgb(225, 226, 221)", boxShadow: 3 }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#2E7D32", fontWeight: "bold" }}
            >
              PureLeaf
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "#388E3C", 
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { backgroundColor: "#2E7D32" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/productsList"
              sx={{
                color: "#388E3C",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { backgroundColor: "#2E7D32" },
              }}
            >
              Products
            </Button>
            <Button
              component={Link}
              to="/cart"
              sx={{
                color: "#388E3C",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { backgroundColor: "#2E7D32" },
              }}
            >
              Cart
            </Button>

            {!token && (
              <>
                <Button
                  component={Link}
                  to="/signIn"
                  sx={{
                    color: "#388E3C",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#2E7D32" },
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to="/signUp"
                  sx={{
                    color: "#388E3C",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#2E7D32" },
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
            {token && (
              <Button
                sx={{
                  color: "#388E3C",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2E7D32" },
                }}
                component={Link}
                to="/dashboard/user"
              >
                User Dashboard
              </Button>
            )}
            {token && role == "Admin" && (
              <Button
                sx={{
                  color: "#388E3C",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2E7D32" },
                }}
                component={Link}
                to="/dashboard/admin"
              >
                Admin Dashboard
              </Button>
            )}
            {token && (
              <>
                <Button
                  component={Link}
                  to="/profile"
                  sx={{
                    color: "#388E3C",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#2E7D32" },
                  }}
                >
                  Profile
                </Button>

                <Button
                  onClick={handleLogout}
                  sx={{
                    color: "#388E3C",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#2E7D32" },
                  }}
                >
                  Sign Out
                </Button>
              </>
            )}
          </Box>

          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
