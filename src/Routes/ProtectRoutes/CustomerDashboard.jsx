import React from 'react';
import { Outlet } from "react-router-dom";

import { SignIn } from '../../pages/Customer/SignIn';

export const CustomerDashboard = () => {
  const signIn = JSON.parse(localStorage.getItem("isSignIn"));

  const isAuthenticated = signIn && signIn === true;
  return (
    <div>
      {isAuthenticated ? <Outlet /> : <SignIn />}
    </div>
  );
};
