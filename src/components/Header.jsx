import React from "react";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <select
          name=""
          id=""
          className="bg-white py-2 px-4 border border-[#edf1f2] rounded focus:border-[#4da3ff]"
        >
          <option disabled selected value="">
            Select an option <IoMdArrowDropdown />
          </option>
          <option value="update_at">update_at</option>
          <option value="created_at">created_at</option>
          <option value="find_at">find_at</option>
        </select>
        <div className="bg-white border border-[#edf1f2] py-3 px-4 rounded">
          <IoFilterSharp />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Type to search"
            className="bg-white py-2 px-4 border border-[#edf1f2] rounded focus:outline-none focus:border-[#4da3ff] focus:placeholder-transparent"
          />
          <BiSolidSearchAlt2 />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex gap-4 items-center bg-[#007bff] text-white py-2 px-4 border rounded">
          New Customer <FaPlus />
        </button>
        <button className="flex items-center bg-[#cce4ff] py-[11px] px-2 rounded border border-transparent hover:border-[#007bff]">
          <HiOutlineDotsVertical className="text-[#007bff]" />
        </button>
      </div>
    </div>
  );
}

export default Header;
