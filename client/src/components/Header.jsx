import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto p-3">
        <Link to="/">
          <h1 className="font-semibold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500 font-extrabold">Sam</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch size={20} />
        </form>
        <ul className="flex gap-7">
          <Link to="/home">
            <li className="hidden sm:inline text-slate-700 hover:underline font-semibold text-xl">
              Home
            </li>
          </Link>

          {isLoggedIn ? (
            <Link to="/signin">
              <li className=" sm:inline text-slate-700 hover:underline font-semibold text-xl">
                Sign in
              </li>
            </Link>
          ) : (
            <Link to="/profile">
              <li className="hidden sm:inline text-slate-700 hover:underline font-semibold text-xl">
                Profile
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
