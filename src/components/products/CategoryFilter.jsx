import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { Chip, Drawer, IconButton, List, ListItem, AppBar, Toolbar, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const CategoryFilter = () => {
  const { categories, setSelectedCategoryId } = useContext(CategoryContext);
  const [open, setOpen] = React.useState(false);

  const handleCategoryClick = (categoryId) => {
    console.log("Selected category ID@@:", categoryId);
    setSelectedCategoryId(categoryId);
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box
            sx={{
              backgroundColor: "#f7f7f7", // Apply background color only here
              padding: "8px 16px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                mr: 2,
                color: "#4caf50",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: "#4caf50" }}>
              Category Menu
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Categories */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "rgb(225, 226, 221)",
            height: "100%",
            paddingTop: "20px",
            paddingLeft: "10px",
          }}
        >
          <List>
            {/* "All" Category Chip */}
            <ListItem>
              <Chip
                label="All"
                onClick={() => handleCategoryClick(null)}
                clickable
                sx={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#388e3c", // Darker green on hover
                    color: "white",
                  },
                  padding: "12px 20px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              />
            </ListItem>

            {/* List of Categories */}
            {categories.map((category) => (
              <ListItem key={category.categoryId}>
                <Chip
                  label={category.categoryName}
                  onClick={() => handleCategoryClick(category.categoryId)}
                  clickable
                  sx={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#388e3c", // Darker green on hover
                      color: "white",
                    },
                    padding: "12px 20px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
