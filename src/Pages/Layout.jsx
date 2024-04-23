import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Work from "../Components/Units";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
