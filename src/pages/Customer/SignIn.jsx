import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { loginUser } from "../../Services/userService";

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
        navigate("/profile"); // Redirect to homepage
      } else {
        setError("Email/Password is incorrect");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };
  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        {error && <p className="text-danger">{error}</p>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
      </form>
    </div>
  );
};
