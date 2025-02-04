import React from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu ";
import Footer from "./Footer/Footer";

const Loyout = () => {
  return (
    <>
      <UserMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Loyout;
