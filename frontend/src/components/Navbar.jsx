import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="flex justify-between gap-2 md:gap-5 mt-5 mb-2 rounded-3xl">
      <div className="flex justify-start items-center w-1/3 px-2 bg-white rounded-3xl focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1 rounded" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white rounded-md outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img
            src={user.image}
            alt="user"
            className="w-10 h-10 mt-1 rounded-full"
          />
        </Link>
        <Link
          to="create-pin"
          className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
