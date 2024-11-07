import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  // get userLoggedIn data from userContext and then use conditional rendering 

  const token = localStorage.getItem("token");

  const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
  const role = decodedToken ? decodedToken.role : null;
  const handleLogout = () => {
    localStorage.removeItem("isSignIn");
    //to remove the profile data
    localStorage.removeItem("token");

    setTimeout(() => navigate("/signIn"), 100);
  };
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        
          <li style={{ marginRight: "20px" }}>
            <Link
              to="/productsList"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Products
            </Link>
          </li>
        
        {!token && (
          <li style={{ marginRight: "20px" }}>
            <Link
              to="/signIn"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SignIn
            </Link>
          </li>
        )}
        {!token && (
          <li style={{ marginRight: "20px" }}>
            <Link
              to="/signUp"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SignUp
            </Link>
          </li>
        )}
        {token &&  (
          <li style={{ marginRight: "20px" }}>
            <Link
              to="/profile"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Profile
            </Link>
          </li>
        )}
        {token && (
          <li style={{ marginRight: "20px" }}>
            <Link
              className="nav-link"
              onClick={handleLogout}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Sign Out
            </Link>
          </li>
        )}
        {token && role === "Admin" && (
          <li style={{ marginRight: "20px" }}>
            <Link
              to="/dashboard/admin/addProduct"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Add Product
            </Link>
          </li>
        )}
        {token && role === "Admin" && (
          <li style={{ marginRight: "20px" }}>
            <Link
              to="/dashboard/admin/addCategory"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Add Category
            </Link>
          </li>
        )}
        {token && role === "Admin" && (
          <li style={{ marginRight: "20px" }}>
            <Link
              to="/dashboard/admin/categoryList"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Category List
            </Link>
          </li>
        )}
        {token && role === "Customer" && (
          <li style={{ marginRight: "20px" }}>
            <Link to="/dashboard/customer/cart" style={{ color: "#fff", textDecoration: "none" }}>
              Cart
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
