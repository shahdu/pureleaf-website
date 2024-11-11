import React from 'react';
import { Outlet } from "react-router-dom";

import { SignIn } from '../../pages/Customer/SignIn';


export const AdminProtect = () => {
    const signIn = JSON.parse(localStorage.getItem("isSignIn"));

    const token = localStorage.getItem("token");

  const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;

  const role = decodedToken ? decodedToken.role : null;

  const isAuthenticated = signIn && role === "Admin";
  return (
    <div>
      {isAuthenticated ? <Outlet /> : <SignIn />}
    </div>
  );
};
