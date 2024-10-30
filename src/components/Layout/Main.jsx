import React from 'react';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <main style={{ padding: "20px" }}>
      <Outlet />
    </main>
  );
};
