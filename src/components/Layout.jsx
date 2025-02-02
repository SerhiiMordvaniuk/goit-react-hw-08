import React from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu ";

const Loyout = () => {
  return (
    <>
      <UserMenu />
      <Outlet />
    </>
  );
};

export default Loyout;
