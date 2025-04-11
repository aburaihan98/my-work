import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg border-r fixed top-0 left-0">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-3">
          <li>
            <Link
              to="medicine"
              className=" cursor-pointer block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
            >
              💊 Medicine
            </Link>
          </li>
          <li>
            <Link
              to="food"
              className=" cursor-pointer block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
            >
              🍔 Food
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
