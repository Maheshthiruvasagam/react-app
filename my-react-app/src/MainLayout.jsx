// src/MainLayout.jsx
import React from "react";
import Header from "./header.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header /> {/* Shown only for routes inside MainLayout */}
      <Outlet />  {/* This renders the child route component */}
    </>
  );
};

export default MainLayout;
