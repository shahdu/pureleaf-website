import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>

        <li style={{ marginRight: "20px" }}>
          <Link to="/signIn" style={{ color: "#fff", textDecoration: "none" }}>
            SignIn
          </Link>
        </li>

        <li style={{ marginRight: "20px" }}>
          <Link to="/signUp" style={{ color: "#fff", textDecoration: "none" }}>
            SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

{
  /* <li>
          <Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>
            Products
          </Link>
        </li> */
}
