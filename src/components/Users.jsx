import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Users() {
  return (
    <div className="bg-white p-4 border border-[#edf1f2] rounded  flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src="https://cdn.pixabay.com/photo/2024/08/11/19/24/sunset-8962131_640.jpg"
            alt="User pic"
          />
        </div>
        <div>
          <h3>Abu Raihan</h3>
          <p className="text-[#007bff]">aburaihan@gmail.com</p>
        </div>
      </div>
      <div>
        <p className="text-[#8298a8]">Current panel</p>
        <p>Premlum</p>
      </div>
      <div>
        <p className="text-[#8298a8]">Products</p>
        <p className="text-[#007bff]">CRM, SMS Comp, Appointment</p>
      </div>
      <div>
        <button className="bg-[#b2edd7] rounded-4xl py-1 px-2">Action</button>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-[#007bff] p-[11px] rounded border border-[#edf1f2]">
          <FaArrowRightToBracket />
        </button>
        <button className="flex items-center bg-[#cce4ff] py-[11px] px-2 rounded border border-transparent hover:border-[#007bff]">
          <HiOutlineDotsVertical className="text-[#007bff]" />
        </button>
      </div>
    </div>
  );
}

export default Users;
