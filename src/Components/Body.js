import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
      <Head />
      <div className="flex">
        <Sidebar />
        <div className={`mt-24 z-10 ${isMenuOpen ? "ml-52" : "ml-0"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
