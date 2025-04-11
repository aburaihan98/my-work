import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./share/Header";
import Sidebar from "./share/SideBar";

function Root() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 mt-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
